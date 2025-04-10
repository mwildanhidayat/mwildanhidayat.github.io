
// Fungsi untuk mengupdate waktu
function updateIndonesiaTime() {
    const now = new Date();
    
    // Waktu Indonesia Barat (WIB) UTC+7
    const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
    
    // Waktu Indonesia Tengah (WITA) UTC+8
    const witaTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    
    // Waktu Indonesia Timur (WIT) UTC+9
    const witTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    
    // Format waktu menjadi HH:MM:SS
    const formatTime = (date) => {
        return date.toISOString().substr(11, 8);
    };
    
    // Update tampilan
    document.getElementById('wib-time').textContent = formatTime(wibTime);
    document.getElementById('wita-time').textContent = formatTime(witaTime);
    document.getElementById('wit-time').textContent = formatTime(witTime);
}

// Inisialisasi ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    } else {
        console.error('Feather Icons not loaded');
    }
    
    // Jalankan pertama kali
    updateIndonesiaTime();
    
    // Update setiap detik
    setInterval(updateIndonesiaTime, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
        const profileImg = document.getElementById('profileImg');
        const profileImage = document.getElementById('profileImage');
        const bgMusic = document.getElementById('bgMusic');
        let isPlaying = false;
        
        // Pastikan musik dimulai hanya setelah interaksi pengguna
        profileImg.addEventListener('click', function() {
          if (isPlaying) {
            bgMusic.pause();
            profileImg.classList.remove('rotate-animation');
            isPlaying = false;
          } else {
            bgMusic.play()
              .then(() => {
                profileImg.classList.add('rotate-animation');
                isPlaying = true;
              })
              .catch(error => {
                console.log('Autoplay prevented:', error);
                // Beri tahu pengguna untuk mengklik untuk memutar musik
                alert('Silakan klik gambar profil lagi untuk memutar musik.');
              });
          }
        });
        
        // Hentikan animasi ketika musik selesai (meskipun seharusnya loop)
        bgMusic.addEventListener('ended', function() {
          profileImg.classList.remove('rotate-animation');
          isPlaying = false;
        })
        });