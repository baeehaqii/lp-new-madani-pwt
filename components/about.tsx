"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" 
import { X } from "lucide-react" 

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dqobwse9q/image/upload/v1762291403/02_B_mevzoh.avif"
                alt="Sapphire Madani Purwokerto"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Madani</h2>
              <p className="about-description">
                Bayangkan tinggal di kawasan sejuk dengan udara pegunungan yang segar, tapi tetap dekat dengan pusat kota. Itulah yang ditawarkan Sapphire Madani, sebuah perumahan Purwokerto yang memadukan ketenangan alam dan kemudahan akses perkotaan dalam satu kawasan eksklusif di Jl. Raya Kebocoran, Dusun III, Karangsalam Kidul, Kedungbanteng, Banyumas. Berada di kaki Gunung Slamet dan hanya 9 menit dari Stasiun Purwokerto, Sapphire Madani dirancang sebagai perumahan Purwokerto yang menghadirkan keseimbangan hidup ideal: lingkungan hijau, lokasi strategis, dan nilai investasi yang terus berkembang. 
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">9 menit</div>
              <div className="about-stat-label">ke fasilitas kesehatan</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">3 menit</div>
              <div className="about-stat-label">ke fasilitas pendidikan</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">7 menit</div>
              <div className="about-stat-label">ke fasilitas perbelanjaan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Madani</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/v1762291401/04_A_s0h6v3.avif"
                  alt="Sapphire Madani Purwokerto"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Bayangkan tinggal di kawasan sejuk dengan udara pegunungan yang segar, tapi tetap dekat dengan pusat kota. Itulah yang ditawarkan Sapphire Madani, sebuah perumahan Purwokerto yang memadukan ketenangan alam dan kemudahan akses perkotaan dalam satu kawasan eksklusif di Jl. Raya Kebocoran, Dusun III, Karangsalam Kidul, Kedungbanteng, Banyumas. Berada di kaki Gunung Slamet dan hanya 9 menit dari Stasiun Purwokerto, Sapphire Madani dirancang sebagai perumahan Purwokerto yang menghadirkan keseimbangan hidup ideal: lingkungan hijau, lokasi strategis, dan nilai investasi yang terus berkembang. 
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>9 menit ke fasilitas kesehatan</li>
                  <li>3 menit ke fasilitas pendidikan</li>
                  <li>7 menit ke fasilitas perbelanjaan</li>
                  <li>Bebas polusi dan kebisingan kota</li>
                  <li>Dikelilingi pemandangan alam yang asri</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan sistem CCTV, petugas sekuriti, dan one gate system</li>
                  <li>Akses jalan lebar, mempermudah mobilitas</li>
                  <li>Taman bermain dan area rekreasi keluarga</li>
                  <li>Ruang terbuka hijau yang luas dengan pemandangan Gunung Slamet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
