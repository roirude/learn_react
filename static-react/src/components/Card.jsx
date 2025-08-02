export default function Card() {
  return (
    <div className="card">
      <div className="card-content cloud-container">
        <div className="cloud-filter"></div>
        <div className="cloud-content">
          <h1 className="card-title">Rudex J. Tede</h1>
          <p className="card-description">React Developer with a passion for building web applications.</p>
          <div className="card-footer">
            <div className="card-rang">
              <div className="rang">
                <span class="material-symbols-outlined">contacts_product</span>
                <span>312</span>
              </div>
              <div className="rang">
                <span class="material-symbols-outlined">library_add_check</span>
                <span>100</span>
              </div>
            </div>
            <button>Follow +</button>
          </div>
        </div>
      </div>
    </div>
  );
}
