---
layout: default
title: "Presentation Skills Training Framework"
---

**Objective**: Guide you through delivering a simple, duplicatable presentation that piques interest, gets them a plan, and recruits them onto the team.

## Overview

This presentation framework is designed to guide you through delivering a simple, duplicatable presentation broken up into digestible parts. The goal is to **pique interest**, **get them a plan**, and **recruit them onto the team**.

<div style="position:relative;height:0;padding-bottom:56.25%;margin-bottom:20px;background:#000;border-radius:8px;overflow:hidden;">
  <iframe
    src="https://iframe.mediadelivery.net/embed/124653/e4557da2-cafa-44f0-97a9-0221a1c3b212?autoplay=false&preload=true"
    style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;border-radius:8px;"
    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
    allowfullscreen="true"
    id="bunny-iframe"
    frameborder="0"
    scrolling="no"
  ></iframe>
  <!-- Fallback message for debugging -->
  <div id="video-fallback" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:white;text-align:center;padding:20px;">
    <p>📹 Video loading...</p>
    <p style="font-size:14px;opacity:0.7;">If video doesn't load, <a href="https://iframe.mediadelivery.net/embed/124653/e4557da2-cafa-44f0-97a9-0221a1c3b212" target="_blank" style="color:#4fc3f7;">watch here</a></p>
  </div>
</div>

<!-- Custom Chapters UI -->
<div id="chapters-container" style="margin-top:20px;padding:20px;background:#f8f9fa;border-radius:8px;border:1px solid #e9ecef;">
  <h4 style="margin:0 0 15px 0;color:#495057;font-size:18px;font-weight:600;">📚 Video Chapters</h4>
  <div id="chapters-list" style="display:grid;gap:8px;">
    <!-- Chapters will be populated by JavaScript -->
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const chapters = [
        { time: 0, title: "Break the Ice", duration: "0:36" },
        { time: 36, title: "Get to Know Them", duration: "1:20" },
        { time: 116, title: "Set Expectations", duration: "0:36" },
        { time: 152, title: "The Financial House", duration: "1:24" },
        { time: 236, title: "Problems with the House", duration: "3:39" },
        { time: 455, title: "The Solution", duration: "0:50" },
        { time: 505, title: "Identify Referrals", duration: "0:48" },
        { time: 553, title: "Your Personal Story", duration: "1:20" },
        { time: 633, title: "How We Get Paid", duration: "1:51" },
        { time: 744, title: "The Closing Question", duration: "0:21" },
        { time: 765, title: "A) Get a Plan", duration: "1:45" },
        { time: 870, title: "B) Make Extra Money", duration: "7:26" }
    ];

    const chaptersList = document.getElementById('chapters-list');
    const fallback = document.getElementById('video-fallback');

    // Create chapter elements
    chapters.forEach((chapter, index) => {
        const chapterElement = document.createElement('div');
        chapterElement.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: white;
            border: 1px solid #dee2e6;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        `;

        chapterElement.innerHTML = `
            <div style="display: flex; align-items: center; gap:12px;">
                <span style="background:#007bff;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">${index + 1}</span>
                <span style="font-weight:500;color:#495057;">${chapter.title}</span>
            </div>
            <span style="color:#6c757d;font-size:14px;">${chapter.duration}</span>
        `;

        chapterElement.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.borderColor = '#007bff';
            this.style.transform = 'translateY(-1px)';
            this.style.boxShadow = '0 2px 8px rgba(0,123,255,0.1)';
        });

        chapterElement.addEventListener('mouseleave', function() {
            this.style.background = 'white';
            this.style.borderColor = '#dee2e6';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        chapterElement.addEventListener('click', function() {
            seekToChapter(chapter.time);

            // Update active state
            document.querySelectorAll('#chapters-list > div').forEach(el => {
                el.style.background = 'white';
                el.style.borderColor = '#dee2e6';
            });
            this.style.background = '#e3f2fd';
            this.style.borderColor = '#007bff';
        });

        chaptersList.appendChild(chapterElement);
    });

    function seekToChapter(seconds) {
        const iframe = document.getElementById('bunny-iframe');
        if (iframe && iframe.contentWindow) {
            try {
                // Send postMessage to seek to specific time
                iframe.contentWindow.postMessage({
                    method: 'setCurrentTime',
                    value: seconds
                }, '*');

                // Also try to play if paused
                iframe.contentWindow.postMessage({
                    method: 'play'
                }, '*');
            } catch (error) {
                console.log('Seek command failed:', error);
                // Fallback: reload iframe with time parameter
                const currentSrc = iframe.src;
                const newSrc = currentSrc.includes('?')
                    ? currentSrc.split('?')[0] + `?t=${seconds}&autoplay=true`
                    : currentSrc + `?t=${seconds}&autoplay=true`;
                iframe.src = newSrc;
            }
        }
    }

    // Enhanced video loading detection
    const iframe = document.getElementById('bunny-iframe');
    let loadTimeout;

    function showFallback() {
        if (fallback) fallback.style.display = 'block';
    }

    function hideFallback() {
        if (fallback) fallback.style.display = 'none';
    }

    // Start loading detection
    loadTimeout = setTimeout(showFallback, 5000);

    iframe.addEventListener('load', function() {
        clearTimeout(loadTimeout);
        console.log('Video player loaded successfully');
        hideFallback();

        // Try to verify iframe content loaded
        setTimeout(() => {
            try {
                if (iframe.contentWindow) {
                    // If we can access contentWindow, it's likely loaded
                    console.log('Video content accessible');
                }
            } catch (e) {
                console.log('Video content not accessible (cross-origin, but this is normal)');
            }
        }, 1000);
    });

    iframe.addEventListener('error', function() {
        clearTimeout(loadTimeout);
        console.error('Failed to load video player');
        showFallback();
        document.getElementById('chapters-container').style.display = 'none';
    });

    // Monitor iframe loading state
    setTimeout(() => {
        if (iframe.complete !== false) {
            clearTimeout(loadTimeout);
            hideFallback();
        }
    }, 3000);
});
</script>

<style>
#chapters-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

@media (max-width: 768px) {
    #chapters-container {
        padding: 15px;
        margin-top: 15px;
    }

    #chapters-list > div {
        padding: 10px 12px !important;
        font-size: 14px;
    }

    #chapters-list > div span:first-child {
        width: 24px !important;
        height: 24px !important;
        font-size: 11px !important;
    }
}
</style>

## Presentation Goals

### Primary Objectives
- **Pique Interest**: Capture their attention and show the value of financial planning
- **Get a Plan**: Help them see the need for a written financial plan
- **Recruit**: Invite qualified prospects to join the team

### Key Strategy
It's possible to sign them up immediately, but if you're not confident, default to introducing them to the team. This approach builds trust and creates multiple pathways for engagement.

## Presentation Framework

This is a **casual 30-minute presentation** structured into clear, sequential sections:

### 1. [Breaking the Ice]({{ '/01-breaking-the-ice/' | relative_url }})
*Building rapport and setting expectations*
- Establish that this isn't a sales meeting
- Explain your purpose (opening office, community connection)
- Set low-pressure expectations

### 2. [Get to Know Them]({{ '/02-get-to-know-them/' | relative_url }})
*Discovery and understanding*
- Learn about their family, career, and goals
- Identify pain points and desires
- Build personal connection

### 3. [Set Expectations]({{ '/03-set-expectations/' | relative_url }})
*Clear framework for possible outcomes*
- Three possible paths: introductions, team building, or financial assessment
- No pressure approach
- Flexible engagement options

### 4. [The Financial House]({{ '/04-the-financial-house/' | relative_url }})
*Core concept introduction*
- Foundation: Income protection
- Basics: Emergency fund, budget, legal documents
- Structure: Debt management, retirement, education
- Roof: Goals and dreams

### 5. [Problems with the House]({{ '/05-problems-with-the-house/' | relative_url }})
*Identifying common issues*
- Scattered finances across multiple companies
- No written plan
- Insurance gaps and missed opportunities
- The two biggest problems explained

### 6. [30-Second Personal Story]({{ '/06-30-sec-personal-story/' | relative_url }})
*Building credibility and connection*
- Your background and motivation
- How you got into the business
- Personal journey and results

### 7. [How We Get Paid]({{ '/07-how-we-get-paid/' | relative_url }})
*Transparent compensation model*
- Volume-based earning structure
- Realistic income expectations ($600-$1,500 per client)
- Time efficiency (4-6 hours per client)

### 8. [Closing Questions]({{ '/08-closing-questions/' | relative_url }})
*Determining next steps*
- Identify their primary interest
- Guide toward appropriate action
- Qualify for plan or team opportunity

### 9. [Getting a Plan]({{ '/08a-getting-a-plan/' | relative_url }})
*Working with interested clients*
- Collect current financial information
- Set follow-up appointment
- Prepare comprehensive financial plan

### 10. [Making Extra Money]({{ '/08b-make-extra-money/' | relative_url }})
*Team recruitment presentation*
- Passive income opportunities
- 5-year income projections
- Business model overview

## How to Use This Framework

### Presentation Flow
1. **Start casually** - No pressure, just getting to know people
2. **Build value** - Show problems and solutions
3. **Present options** - Multiple pathways to engage
4. **Close naturally** - Guide to appropriate next step

### Success Metrics
- **Interest Level**: Are they engaged and asking questions?
- **Plan Request**: Do they want a financial plan?
- **Team Interest**: Are they open to the business opportunity?

### Default Strategy
When in doubt, default to introducing them to the team rather than pushing for immediate signup. This maintains the casual, low-pressure approach while still creating potential for future engagement.

## Key Features

- **Real conversation examples** with actual dialogue and responses
- **Step-by-step guidance** through the entire presentation process
- **Multiple pathways** for different types of engagement
- **Natural conversation flow** that doesn't feel scripted
- **30-minute timeframe** for busy professionals
- **Flexible structure** that adapts to different situations

Navigate through each section in order to understand the complete framework, or jump to specific scenarios that match your current presentation needs.

## Complete Script

For the full presentation script with all sections combined for easy reference during client meetings, view the **[Complete Presentation Script]({{ '/../archive/complete-script/' | relative_url }})**.

This complete script includes:
- Full dialogue and conversation examples
- All presentation sections in sequential order
- Client scenarios and recruitment approaches
- Key delivery notes for team members