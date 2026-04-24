import type { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <Link href="/" className="dashboard-logo">
          CuteClear
        </Link>

        <nav className="dashboard-nav">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/projects">Projects</Link>
          <Link href="/dashboard/tasks">Tasks</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <div className="dashboard-content">
        <header className="dashboard-topbar">
          <h1>Dashboard</h1>
        </header>

        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}