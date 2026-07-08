function filterProyek(kategori) {
    const proyekItems = document.querySelectorAll('.project-item');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    proyekItems.forEach(item => {
        if (kategori === 'semua') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(kategori)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
document.getElementById('formKontak').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const errorPesan = document.getElementById('error-pesan');

    if (nama === "" || pesan === "") {
        errorPesan.textContent = "Please fill out all required fields!";
        errorPesan.style.color = "#df4e5a"; 
    } else {
        errorPesan.textContent = "Your message has been sent successfully!";
        errorPesan.style.color = "#ffffff"; 
        
        document.getElementById('formKontak').reset();
    }
});