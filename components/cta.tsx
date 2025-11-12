import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

const nomorWhatsApp = "6281127010001";
const pesan = "Halo, saya tertarik dengan properti Sapphire Madani Purwokerto";
const linkWhatsApp= `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

export default function CallToAction() {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Setiap Masa Depan Hebat Dimulai dari Keputusan Hari Ini</h2>
          <p className="cta-description">
            Pilih hunian yang memberi ketenangan dan kemudahan akses di Purwokerto.
            Segera hubungi kami!
          </p>

          <div className="cta-buttons">
            <Link 
              href={linkWhatsApp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button cta-button-primary"
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link 
            //border cta
              href={linkWhatsApp}
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button cta-button-outline"
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}