import { School, Hospital, TreePine, ShoppingBag, Train, Building } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: ["9 menit dari RS Ananda", "11 menit dari RSUD Margono Soekarjo Unit Geriatri Paviliun Abiyasa"],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "5 menit dari SMA 3 Purwokerto",
        "3 menit dari Universitas Wijaya Kusuma",
        "8 menit dari UIN Prof. K.H. Saifuddin Zuhri",
        "11 menit dari Universitas Jenderal Soedirman",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: ["7 menit dari Pasar Cerme", "12 menit dari Rita Supermall"],
    },
    {
      icon: <Train />,
      title: "Fasilitas Umum",
      items: ["9 menit dari Stasiun Purwokerto", "12 menit dari Alun-Alun Purwokerto"],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
