Emmanuel Mathew Krisna Rata – Bug Fixing (UI Issues)
Tugas:
Perbaiki masalah tampilan seperti:
Layout kacau jika task panjang
Style tidak konsisten
Responsivitas tombol di mobile

Febrian Dani Ritonga – Bug Fixing (Functional Bugs)
Tugas:
Perbaiki bug seperti:
- memperbaiki = menjadi === dan menambahkan === true
- Assignment di Kondisi If 
```if (task.completed = true)```
 
menjadi :
``` if (task.completed)```

- Input Tidak Dikosongkan Setelah Menambah Tugas
taskInput.value = "";

- Menambahkan Fungsi Hapus Task
```
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
```

Galih Zen Salim – Filter Task Feature (Logic & UI)
Tugas:
Tambahkan fitur filter untuk menampilkan task yang belum selesai saja
Buat tombol/opsi UI untuk mengaktifkan filter

Muhammad Rijalun Shodaqu – Code Refactor & Cleanup
Tugas:
Rapikan struktur kode (JS, HTML, CSS)
Hapus duplikasi & benahi penamaan variabel/fungsi agar konsisten

### Naufal Haidar Rauf – Testing & Bug Rechecking

Tugas:
Uji aplikasi setelah perbaikan & fitur baru
Catat bug tambahan dan sampaikan ke lead
Pastikan semua fungsi berjalan sesuai ekspektasi


1. Uji aplikasi setelah perbaikan & fitur baru
    - fitur menambahkan task baru:✅
    - fitur menghapus otomatis task yang dimasukkan user: ✅
    - fitur menampilkan task berdasarkan opsi dropdown/filter yang dipilih: ✅
2. Catat bug tambahan dan sampaikan ke lead
3. Pastikan semua fungsi berjalan sesuai ekspektasi
