document.addEventListener("DOMContentLoaded", function() {
    const bunnyIframe = document.getElementById('bunny-iframe');
    const chapters = [
        { time: 0, title: "Break the Ice", duration: "0:36", step: 1, stepLabel: "Step 1", isSubStep: false },
        { time: 36, title: "Get to Know Them", duration: "1:20", step: 2, stepLabel: "Step 2", isSubStep: false },
        { time: 116, title: "Set Expectations", duration: "0:36", step: 3, stepLabel: "Step 3", isSubStep: false },
        { time: 152, title: "The Financial House", duration: "1:24", step: 4, stepLabel: "Step 4", isSubStep: false },
        { time: 236, title: "Problems with the House", duration: "3:39", step: 4.1, stepLabel: "Step 04a", isSubStep: true, parentStep: 4 },
        { time: 455, title: "The Solution", duration: "0:50", step: 4.2, stepLabel: "Step 04b", isSubStep: true, parentStep: 4 },
        { time: 505, title: "Identify Referrals", duration: "0:48", step: 4.3, stepLabel: "Step 04c", isSubStep: true, parentStep: 4 },
        { time: 553, title: "Your Personal Story", duration: "1:20", step: 5, stepLabel: "Step 5", isSubStep: false },
        { time: 633, title: "How We Get Paid", duration: "1:51", step: 6, stepLabel: "Step 6", isSubStep: false },
        { time: 744, title: "The Closing Question", duration: "0:21", step: 7, stepLabel: "Step 7", isSubStep: false },
        { time: 765, title: "A) Get a Plan", duration: "1:45", step: 7.1, stepLabel: "Step 07a", isSubStep: true, parentStep: 7 },
        { time: 870, title: "B) Make Extra Money", duration: "7:26", step: 7.2, stepLabel: "Step 07b", isSubStep: true, parentStep: 7 },
        { time: 907, title: "$5,000 in 5 Years", duration: "6:49", step: 7.3, stepLabel: "Step 07c", isSubStep: true, parentStep: 7 }
    ];

    const chaptersList = document.getElementById('chapters-list');
    const fallback = document.getElementById('video-fallback');
    const chaptersContainer = document.getElementById('chapters-container');
    const chapterEntries = [];
    let bunnyPlayer = null;
    let playerReady = false;
    let pendingSeek = null;
    let trackingViaEvents = false;
    let timePollInterval = null;
    let activeChapterIndex = null;

    // Create chapter elements
    chapters.forEach((chapter, index) => {
        const chapterElement = document.createElement('div');
        chapterElement.className = 'chapter-item';
        if (chapter.isSubStep) {
            chapterElement.classList.add('sub-step');
        }
        chapterElement.dataset.index = index;
        chapterElement.dataset.step = chapter.step;

        chapterElement.innerHTML = `
            <div class="chapter-label">
                <span class="step-number">${chapter.stepLabel}</span>
                <span class="chapter-title">${chapter.title}</span>
            </div>
            <span class="chapter-duration">${chapter.duration}</span>
        `;

        chapterElement.addEventListener('click', function() {
            jumpToChapter(chapter.time, index);
        });

        chaptersList.appendChild(chapterElement);

        chapterEntries.push({
            element: chapterElement,
            start: chapter.time,
            end: index < chapters.length - 1 ? chapters[index + 1].time : Infinity,
            step: chapter.step,
            isSubStep: chapter.isSubStep
        });
    });

    if (chapterEntries.length > 0) {
        setActiveChapter(0);
    }

    function setActiveChapter(index) {
        if (index === activeChapterIndex) {
            return;
        }
        if (activeChapterIndex !== null && chapterEntries[activeChapterIndex]) {
            chapterEntries[activeChapterIndex].element.classList.remove('is-active');
        }
        activeChapterIndex = typeof index === 'number' ? index : null;
        if (activeChapterIndex !== null && chapterEntries[activeChapterIndex]) {
            chapterEntries[activeChapterIndex].element.classList.add('is-active');
        }
    }

    function highlightChapterAtTime(seconds) {
        const currentTime = parseFloat(seconds);
        if (Number.isNaN(currentTime)) {
            return;
        }

        let targetIndex = null;
        for (let i = 0; i < chapterEntries.length; i++) {
            const entry = chapterEntries[i];
            if (currentTime >= entry.start && currentTime < entry.end) {
                targetIndex = i;
                break;
            }
        }

        if (targetIndex === null && currentTime >= chapters[chapters.length - 1].time) {
            targetIndex = chapterEntries.length - 1;
        }

        if (targetIndex !== null) {
            setActiveChapter(targetIndex);
        }
    }

    function playerSupports(type, name) {
        return bunnyPlayer && typeof bunnyPlayer.supports === 'function' && bunnyPlayer.supports(type, name);
    }

    function initializePlayer() {
        if (!bunnyIframe) {
            console.error('Bunny iframe not found');
            return;
        }
        if (!window.playerjs) {
            console.error('Player.js not loaded');
            return;
        }

        try {
            bunnyPlayer = new window.playerjs.Player(bunnyIframe);
            console.log('Player initialized successfully');

            bunnyPlayer.on('ready', function() {
                console.log('Player ready event received');
                playerReady = true;
                beginChapterTracking();
                if (pendingSeek !== null) {
                    const { seconds, chapterIndex } = pendingSeek;
                    pendingSeek = null;
                    jumpToChapter(seconds, chapterIndex);
                }
            });

            bunnyPlayer.on('error', function(error) {
                console.error('Player error:', error);
                playerReady = false;
            });

        } catch (error) {
            console.error('Error initializing player:', error);
        }
    }

    function beginChapterTracking() {
        if (!bunnyPlayer || !playerReady) {
            console.warn('Cannot start chapter tracking - player not ready');
            return;
        }

        console.log('Starting chapter tracking...');

        if (!trackingViaEvents && playerSupports('event', 'timeupdate')) {
            trackingViaEvents = true;
            console.log('Using timeupdate events for tracking');
            bunnyPlayer.on('timeupdate', function(data) {
                const value = typeof data === 'number'
                    ? data
                    : (data && typeof data.seconds !== 'undefined' ? data.seconds : data);
                highlightChapterAtTime(value);
            });
        } else if (!timePollInterval && playerSupports('method', 'getCurrentTime')) {
            console.log('Using getCurrentTime polling for tracking');
            timePollInterval = setInterval(() => {
                bunnyPlayer.getCurrentTime(function(value) {
                    highlightChapterAtTime(value);
                });
            }, 500);
        } else {
            console.warn('No suitable tracking method available');
        }
    }

    function jumpToChapter(seconds, chapterIndex) {
        console.log(`Jumping to chapter ${chapterIndex} at ${seconds} seconds`);

        if (typeof chapterIndex === 'number') {
            setActiveChapter(chapterIndex);
        }

        // Always use Bunny's direct URL parameter method
        console.log('Using Bunny URL parameters to jump to chapter');
        reloadIframeToTime(seconds);
    }

    function reloadIframeToTime(seconds) {
        if (!bunnyIframe) return;

        // Store the original clean URL if not already stored
        if (!bunnyIframe.dataset.originalSrc) {
            const currentSrc = bunnyIframe.src;
            const cleanSrc = currentSrc.split('?')[0];
            bunnyIframe.dataset.originalSrc = cleanSrc;
        }

        const baseSrc = bunnyIframe.dataset.originalSrc;
        console.log(`Reloading iframe to: ${baseSrc}?t=${seconds}&autoplay=true`);

        // Set the new URL with time parameter and autoplay
        bunnyIframe.src = `${baseSrc}?t=${seconds}&autoplay=true`;
    }

    initializePlayer();

    // Enhanced video loading detection
    let loadTimeout;

    function showFallback() {
        if (fallback) fallback.style.display = 'block';
        if (chaptersContainer) chaptersContainer.style.display = 'none';
    }

    function hideFallback() {
        if (fallback) fallback.style.display = 'none';
        if (chaptersContainer) chaptersContainer.style.display = 'block';
    }

    // Start loading detection
    loadTimeout = setTimeout(showFallback, 5000);

    bunnyIframe.addEventListener('load', function() {
        clearTimeout(loadTimeout);
        console.log('Video player loaded successfully');
        hideFallback();

        // Try to verify iframe content loaded
        setTimeout(() => {
            try {
                if (bunnyIframe.contentWindow) {
                    // If we can access contentWindow, it's likely loaded
                    console.log('Video content accessible');
                }
            } catch (e) {
                console.log('Video content not accessible (cross-origin, but this is normal)');
            }
        }, 1000);
    });

    bunnyIframe.addEventListener('error', function() {
        clearTimeout(loadTimeout);
        console.error('Failed to load video player');
        showFallback();
    });

    // Monitor iframe loading state
    setTimeout(() => {
        if (bunnyIframe.complete !== false) {
            clearTimeout(loadTimeout);
            hideFallback();
        }
    }, 3000);

    window.addEventListener('beforeunload', function() {
        if (timePollInterval) {
            clearInterval(timePollInterval);
        }
    });
});
