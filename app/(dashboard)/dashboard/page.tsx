export default function DashboardPage() {
  return (
    <>
      <section className="dash-hero">
        <p className="dash-eyebrow">Good morning</p>
        <h2>Everything in one calm place.</h2>
      </section>

      <section className="dash-stats">
        <article className="dash-card card-mint">
          <p>Projects</p>
          <h3>12</h3>
        </article>

        <article className="dash-card card-sand">
          <p>Tasks done</p>
          <h3>48</h3>
        </article>

        <article className="dash-card card-rose">
          <p>Focus score</p>
          <h3>92%</h3>
        </article>
      </section>

      <section className="dash-grid">
        <div className="dash-panel">
          <h3>Recent Activity</h3>
          <ul>
            <li>Updated brand assets</li>
            <li>Completed onboarding flow</li>
            <li>Shared roadmap with team</li>
          </ul>
        </div>

        <div className="dash-panel">
          <h3>Next Priorities</h3>
          <ul>
            <li>Finalize pricing page</li>
            <li>Review analytics</li>
            <li>Ship dashboard v2</li>
          </ul>
        </div>
      </section>
    </>
  );
}