---
layout: chunk
title: "Presentation Framework"
description: "Complete breakdown of the coffee presentation framework. Learn the flow, objectives, and key talking points for every stage of the presentation."
---

<style>

.steps-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 32px;
}

.step-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.2s ease;
}

.step-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 12px;
}

.step-number {
  background: #f1f5f9;
  color: #64748b;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.8em;
  flex-shrink: 0;
  border: 1px solid #e2e8f0;
}

.step-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.step-purpose {
  color: #64748b;
  font-style: italic;
  font-size: 0.95em;
  margin-bottom: 16px;
  padding: 8px 12px;
  background: #f1f5f9;
  border-radius: 4px;
}

.step-content {
  display: grid;
  gap: 16px;
}

.content-section {
  padding: 12px;
  border-radius: 6px;
}

.content-section h4 {
  margin: 0 0 8px 0;
  color: #334155;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.key-points {
  background: #f8f5f0;
  border-left: 3px solid #92400e;
}

.key-points ul {
  margin: 0;
  padding-left: 16px;
}

.key-points li {
  margin-bottom: 6px;
  color: #78350f;
  font-size: 0.9em;
}

.key-questions {
  background: #f6f7f6;
  border-left: 3px solid #64748b;
}

.key-questions ul {
  margin: 0;
  padding-left: 16px;
}

.key-questions li {
  margin-bottom: 6px;
  color: #475569;
  font-size: 0.9em;
}

.structure-list {
  background: #f8f7fa;
  border-left: 3px solid #6b7280;
}

.structure-list ul {
  margin: 0;
  padding-left: 16px;
}

.structure-list li {
  margin-bottom: 6px;
  color: #374151;
  font-size: 0.9em;
}

.outcome-list {
  background: #f8fafc;
  border-left: 3px solid #64748b;
}

.outcome-list ol {
  margin: 0;
  padding-left: 16px;
}

.outcome-list li {
  margin-bottom: 6px;
  color: #475569;
  font-size: 0.9em;
}

.story-elements {
  background: #faf5f5;
  border-left: 3px solid #991b1b;
}

.story-elements ul {
  margin: 0;
  padding-left: 16px;
}

.story-elements li {
  margin-bottom: 6px;
  color: #7f1d1d;
  font-size: 0.9em;
}

.metrics-section {
  background: #f8fafc;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
}

.metric-card {
  padding: 16px;
  border-radius: 6px;
}

.good-signs {
  background: #f6f7f6;
  border-left: 3px solid #64748b;
}

.red-flags {
  background: #faf5f5;
  border-left: 3px solid #991b1b;
}

.strategy-section {
  background: #f1f5f9;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #64748b;
}

.strategy-section ol {
  margin: 16px 0 0 0;
  padding-left: 20px;
}

.strategy-section li {
  margin-bottom: 8px;
  color: #475569;
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .step-number {
    width: 28px;
    height: 28px;
    font-size: 0.8em;
  }

  .step-title {
    font-size: 1.1em;
  }
}
</style>


<div class="steps-grid">

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 1</div>
    <h3 class="step-title">Breaking the Ice</h3>
  </div>
  <div class="step-purpose">Set expectations and build immediate rapport</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Position as relationship-building, not sales</li>
        <li>Be transparent about opening office goals</li>
        <li>Get permission to proceed</li>
        <li>Keep casual and low-pressure</li>
      </ul>
    </div>
    <div class="content-section key-questions">
      <h4>💬 Key Lines</h4>
      <ul>
        <li>"This isn't a sales meeting"</li>
        <li>"I'm opening a new office and getting my name out there"</li>
        <li>"If someone comes to mind who I should meet, I'd appreciate an introduction"</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 2</div>
    <h3 class="step-title">Get to Know Them</h3>
  </div>
  <div class="step-purpose">Understand their situation and uncover pain points</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Learn about career, family, and goals</li>
        <li>Identify what they want vs. have</li>
        <li>Discover financial gaps</li>
        <li>Build genuine connection</li>
      </ul>
    </div>
    <div class="content-section key-questions">
      <h4>💬 Key Questions</h4>
      <ul>
        <li>"What do you do for work?"</li>
        <li>"What do you like most about your current career?"</li>
        <li>"If time and money were no issue, what would you do differently?"</li>
        <li>"Do you have someone handling your financial planning?"</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 3</div>
    <h3 class="step-title">Set Expectations</h3>
  </div>
  <div class="step-purpose">Present three possible outcomes clearly</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Shows you're not trying to sell</li>
        <li>Gives them control over next steps</li>
        <li>Multiple pathways for engagement</li>
        <li>Maintains casual, no-pressure approach</li>
      </ul>
    </div>
    <div class="content-section outcome-list">
      <h4>🎯 Three Outcomes</h4>
      <ol>
        <li><strong>Introductions</strong> - They might know people who need help</li>
        <li><strong>Team Building</strong> - They might be interested in the business</li>
        <li><strong>Financial Assessment</strong> - They might want help with finances</li>
      </ol>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 4</div>
    <h3 class="step-title">The Financial House</h3>
  </div>
  <div class="step-purpose">Teach simple framework for understanding finances</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Use house analogy (foundation, structure, roof)</li>
        <li>Make complex concepts easy to understand</li>
        <li>Show systematic approach</li>
        <li>Create memorable mental model</li>
      </ul>
    </div>
    <div class="content-section structure-list">
      <h4>🏠 House Structure</h4>
      <ul>
        <li><strong>Foundation</strong>: Income protection (insurance)</li>
        <li><strong>Basics</strong>: Emergency fund, budget, legal documents</li>
        <li><strong>Structure</strong>: Debt elimination, retirement, education</li>
        <li><strong>Roof</strong>: Goals and dreams (travel, freedom, experiences)</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 04a</div>
    <h3 class="step-title">Problems with the House</h3>
  </div>
  <div class="step-purpose">Show why traditional financial planning fails</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Use real examples of common problems</li>
        <li> scattered finances hurt people</li>
        <li>Most people lack written plan</li>
        <li>Create urgency without fear tactics</li>
      </ul>
    </div>
    <div class="content-section key-points">
      <h4>⚠️ Common Problems</h4>
      <ul>
        <li>Wrong insurance with wrong beneficiaries</li>
        <li>No emergency fund leading to debt</li>
        <li>No written financial plan</li>
        <li>Scattered accounts with conflicting advice</li>
        <li>Missing out on government grants</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 04b</div>
    <h3 class="step-title">The Solution</h3>
  </div>
  <div class="step-purpose">Present your clear solution to their problems</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Show specific results you can deliver</li>
        <li>Use concrete numbers and examples</li>
        <li>Demonstrate value you provide</li>
        <li>Make it tangible and believable</li>
      </ul>
    </div>
    <div class="content-section structure-list">
      <h4>✅ Your Solution</h4>
      <ul>
        <li>Cut insurance costs in half</li>
        <li>Will and power of attorney for ~$200</li>
        <li>Debt-free in 20 years (not 25+)</li>
        <li>6-9% investment returns</li>
        <li>All savings redirected to goals</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 04c</div>
    <h3 class="step-title">Identifying Referrals</h3>
  </div>
  <div class="step-purpose">Get referrals naturally from the conversation</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Ask if anyone comes to mind who needs help</li>
        <li>Get specific names and contact information</li>
        <li>Determine best way to connect</li>
        <li>Keep it casual and no-pressure</li>
      </ul>
    </div>
    <div class="content-section key-questions">
      <h4>💬 Referral Questions</h4>
      <ul>
        <li>"If you run into someone who needs this, does anyone come to mind?"</li>
        <li>"What are their names?"</li>
        <li>"What's the best way for me to connect with them?"</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 5</div>
    <h3 class="step-title">30-Second Personal Story</h3>
  </div>
  <div class="step-purpose">Build credibility through your personal journey</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Share why you got into the business</li>
        <li>Show how you help people like their parents</li>
        <li>Demonstrate passion and expertise</li>
        <li>Make it relatable and authentic</li>
      </ul>
    </div>
    <div class="content-section story-elements">
      <h4>📖 Story Elements</h4>
      <ul>
        <li>Your background (wasn't interested in finance initially)</li>
        <li>The problem you saw (parents struggling)</li>
        <li>The solution you discovered</li>
        <li>The results you achieved</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 6</div>
    <h3 class="step-title">How We Get Paid</h3>
  </div>
  <div class="step-purpose">Explain your compensation model transparently</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Show how volume-based compensation works</li>
        <li>Use real numbers and examples</li>
        <li>Demonstrate income potential</li>
        <li>Compare to traditional jobs</li>
      </ul>
    </div>
    <div class="content-section structure-list">
      <h4>💰 Compensation Breakdown</h4>
      <ul>
        <li>Insurance: ~$500 per client</li>
        <li>Legal services: ~$100 per referral</li>
        <li>Mortgages: ~$400 per closing</li>
        <li>Investments: ~$500 per client</li>
        <li>Average: $600-1,000 per client for 4-6 hours work</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 7</div>
    <h3 class="step-title">Closing Questions</h3>
  </div>
  <div class="step-purpose">Determine interests and guide to next steps</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Ask what stood out to them most</li>
        <li>Identify specific interests (plan vs. business vs. referrals)</li>
        <li>Guide to appropriate next steps</li>
        <li>Set up follow-up appointments</li>
      </ul>
    </div>
    <div class="content-section key-questions">
      <h4>💬 Key Questions</h4>
      <ul>
        <li>"What stood out to you the most?"</li>
        <li>"What area appealed to you the most?"</li>
        <li>"Are you interested in getting a plan, making extra money, or both?"</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 07a</div>
    <h3 class="step-title">Getting a Plan</h3>
  </div>
  <div class="step-purpose">Convert interested prospects into clients</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Gather information for their plan</li>
        <li>Ask commitment questions</li>
        <li>Get referral permission</li>
        <li>Schedule planning appointment</li>
      </ul>
    </div>
    <div class="content-section key-questions">
      <h4>💬 Key Questions</h4>
      <ul>
        <li>"If I can put together a plan that helps you reach your goals, would you implement it?"</li>
        <li>"Assuming you feel good about my work, would you recommend me to others?"</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 07b</div>
    <h3 class="step-title">Making Extra Money</h3>
  </div>
  <div class="step-purpose">Convert interested prospects into team members</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Present the business opportunity</li>
        <li>Explain passive income potential</li>
        <li>Show the 5-year plan</li>
        <li>Get them to meet the team</li>
      </ul>
    </div>
    <div class="content-section structure-list">
      <h4>🚀 Business Points</h4>
      <ul>
        <li>Passive income from ongoing client relationships</li>
        <li>Example: 2 clients/week × $500/month × 5 years = $5,200/month</li>
        <li>No quotas, can be done part-time</li>
        <li>Full training and support provided</li>
      </ul>
    </div>
  </div>
</div>

<div class="step-card">
  <div class="step-header">
    <div class="step-number">Step 07c</div>
    <h3 class="step-title">$5,000 in 5 Years Plan</h3>
  </div>
  <div class="step-purpose">Paint the long-term passive income vision</div>
  <div class="step-content">
    <div class="content-section key-points">
      <h4>🎯 Key Points</h4>
      <ul>
        <li>Use the passive-income math to show predictability</li>
        <li>Tie the plan to real families reallocating their savings</li>
        <li>Emphasize automatic contributions and retention</li>
        <li>Invite them to learn the 90-day training system</li>
      </ul>
    </div>
    <div class="content-section structure-list">
      <h4>📈 Passive Income Math</h4>
      <ul>
        <li>Average household saves ~$500/month already</li>
        <li>2% trailer = $10 per $500 saved through you</li>
        <li>2 clients/week ≈ $1,040/month passive income per year</li>
        <li>Keep the pace for 5 years → ~$5,200/month</li>
      </ul>
    </div>
  </div>
</div>

</div>

<div class="metrics-section">
  <h3>📊 Success Metrics</h3>
  <div class="metrics-grid">
    <div class="metric-card good-signs">
      <h4>✅ Good Signs</h4>
      <ul>
        <li>They're engaged and asking questions</li>
        <li>They share personal information freely</li>
        <li>They ask about your background</li>
        <li>They want to know more about the business</li>
      </ul>
    </div>
    <div class="metric-card red-flags">
      <h4>⚠️ Red Flags</h4>
      <ul>
        <li>They're distracted or checking phone</li>
        <li>They give short, defensive answers</li>
        <li>They keep saying "I already have an advisor"</li>
        <li>They want to "think about it" without specific concerns</li>
      </ul>
    </div>
  </div>
</div>

<div class="strategy-section">
  <h3>🎯 Default Strategy</h3>
  <p>When in doubt:</p>
  <ol>
    <li><strong>Default to introductions</strong> rather than pushing for immediate signup</li>
    <li><strong>Maintain posture</strong> - you're offering real value</li>
    <li><strong>Focus on education</strong> not selling</li>
    <li><strong>Keep it casual</strong> like a coffee conversation</li>
  </ol>
</div>
