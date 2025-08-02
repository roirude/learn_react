export default function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Rudex J. Tede</h1>
        <p>React Developer with a passion for building web applications.</p>
        <div className="card-footer">
          <div className="card-rang">
            <div>
              <span class="material-symbols-outlined">contacts_product</span>
              <span>312</span>
            </div>
            <div>
              <span class="material-symbols-outlined">library_add_check</span>
              <span>100</span>
            </div>
          </div>
          <button>Follow +</button>
        </div>
      </div>
    </div>
  );
}
