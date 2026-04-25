export default function DemoPage() {
  return (
    <main className="demo">
      <div className="container demo-box">

        <p className="demo-label">Demo frontend</p>

        <h1 className="demo-title">
          Ta podstrona jest częścią demonstracji UI
        </h1>

        <p className="demo-text">
          Nie wszystkie linki w projekcie prowadzą do pełnych widoków backendowych.
          Ta strona została dodana jako przykład nawigacji i layoutu frontendu.
        </p>

        <p className="demo-text">
          Jeśli oceniasz projekt — skup się na designie, strukturze i UX.
        </p>

        <a href="/" className="btn-primary">
          Wróć na stronę główną
        </a>

      </div>
    </main>
  );
}