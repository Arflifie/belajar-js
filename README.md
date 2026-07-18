# 🚀 Belajar JavaScript Dasar

Repository ini berisi catatan dan latihan saya dalam mempelajari **JavaScript** dari dasar hingga konsep penting seperti **DOM Manipulation** dan **Asynchronous JavaScript**.  
Repo ini dibuat sebagai dokumentasi pembelajaran sekaligus arsip latihan pribadi.

---

## 📌 Materi yang Dipelajari

### 1️⃣ JavaScript Dasar (`basic-js/`)
Pada bagian ini saya mempelajari konsep fundamental JavaScript, antara lain:

- **Variabel & Tipe Data** (`first.js`, `type_data.js`)
  - Variabel (`let`, `const`)
  - Tipe data: String, Number, Boolean
  - `prompt()` dan `parseInt()` untuk input user
- **Array** (`array.js`)
  - Membuat array
  - Method array: `push()`, `concat()`
- **Object** (`object.js`)
  - Membuat object literal
  - Mengakses & mengubah properti object
  - Object bersarang (nested object + array)
- **Conditional / Logika** (`logic.js`)
  - `if`, `else`, `else if`
  - `switch case`
  - Validasi input (contoh: validasi password)
- **Perulangan / Looping** (`looping.js`)
  - `for` (termasuk nested loop)
  - `while`
  - `break`
  - `for...of`
  - `for...in`
  - Latihan pola bintang (segitiga)
- **Function** (`function.js`)
  - Function declaration & expression
  - Return value
  - Scope & block scope (`let`, `const` vs `var`)
  - Function sebagai argumen (higher-order function)
  - Function bernilai balik function (closure)
  - Object method & keyword `this`
  - `try...catch` error handling
- **Function & Array Method** (`functionArray.js`)
  - `forEach()`
  - `map()`
  - Arrow function & implicit return
  - `setTimeout()` & `setInterval()` / `clearInterval()`
  - `filter()`
  - `every()` & `some()`
  - `reduce()`
  - Perbedaan `this` pada regular function vs arrow function
- **Fitur Modern ES6+** (`newFitur.js`)
  - Default parameter
  - Spread operator (`...`) untuk array & object
  - Rest parameter
  - Destructuring array
  - Destructuring object (termasuk rename & default value)
  - Destructuring dalam parameter function
- **Mini Game Tebak Angka** (`minigame.js`)
  - Latihan logika: game tebak angka dengan `prompt()`, `while` loop, dan `Math.random()`

---

### 2️⃣ DOM — Document Object Model (`dom-js/`)
Bagian ini membahas cara JavaScript berinteraksi dengan HTML secara langsung.

#### Pengenalan DOM (`introductionDom.js`)
- **Seleksi elemen DOM:**
  - `getElementById()`
  - `getElementsByClassName()`
  - `getElementsByTagName()`
  - `querySelector()` & `querySelectorAll()`
  - Perbedaan `getElement*` vs `querySelector`
- **Manipulasi konten:**
  - `innerHTML`, `innerText`, `textContent` (beserta perbedaannya)
- **Manipulasi atribut:**
  - `attributes`, `setAttribute()`, `getAttribute()`
- **Styling dengan JavaScript:**
  - `element.style.property` (camelCase)
- **classList:**
  - `add`, `remove`, `item`, `toggle`, `contains`
- **Navigasi DOM (Parent, Child, Sibling):**
  - `parentElement`, `children`, `childNodes`
  - `firstElementChild`, `lastElementChild`
  - `nextElementSibling`, `previousElementSibling`
  - `nextSibling`, `previousSibling`
- **Membuat & menambah elemen:**
  - `createElement()`, `append()`, `appendChild()`
  - `insertAdjacentElement()` (beforebegin, afterbegin, beforeend, afterend)
- **Menghapus elemen:**
  - `removeChild()` vs `remove()`

#### Event DOM (`eventDom.js`)
- Event `onclick` (inline & assignment)
- `addEventListener()` untuk menangani klik
- Membuat fungsi random color generator RGB

#### Proyek Pokemon (`pokemon/`)
- Subfolder proyek latihan DOM berbasis Pokemon

---

### 3️⃣ Codepolitan JavaScript DOM (`cp-javascript-dom/`)
Kumpulan latihan DOM dari Codepolitan, masing-masing berisi file `index.html`, `app.js`, dan `app.css`:

- **Selection** (`selection/`)
  - `getElementsByTagName()`, `getElementsByClassName()`
  - `querySelectorAll()` untuk seleksi link
  - Manipulasi style: `color`, `textDecorationColor`, `textDecorationStyle`
- **Event** (`event/`)
  - `onclick` vs `addEventListener()`
  - Menambahkan multiple event listener pada satu elemen
  - `onmouseover` event
- **Event Object** (`eventobject/`)
  - Mengakses event object (`e`)
  - `keydown` event & `e.code` untuk deteksi tombol keyboard (Arrow keys)
  - `keyup` event
- **Event Prevent Default** (`eventprevent/`)
  - `e.preventDefault()` pada form submit
  - Membuat daftar catatan (note list) secara dinamis
- **Random Color** (`randomcolor/`)
  - Random color generator dengan `addEventListener('click')`
  - Menampilkan nilai RGB di halaman
- **This Keyword** (`thiskeyword/`)
  - Penggunaan `this` dalam event handler
  - `querySelectorAll()` + loop untuk multiple event listener
  - Mengubah `backgroundColor` dan `color` secara dinamis

---

### 4️⃣ Asynchronous JavaScript (`async-js/`)
Pada bagian ini saya belajar konsep dasar asynchronous JavaScript:

- **setTimeout dengan Anonymous Function** (`asyncTimeout.js`)
  - `setTimeout()` untuk menampilkan teks setelah delay
  - Callback function sebagai argumen
- **Latihan Logika** (`test.js`)
  - FizzBuzz
  - Pola bintang segitiga (piramida)
- **Halaman HTML untuk Async** (`index.html`)
  - Contoh implementasi async di browser

---

### 5️⃣ Latihan Praktik (`latihan/`)
Kumpulan latihan praktik untuk mengasah kemampuan DOM manipulation:

- **Latihan Dasar** (`latihan.js`)
  - Form submit event & `preventDefault()`
  - Membuat daftar item (to-do list) secara dinamis dengan `createElement()` & `appendChild()`
  - Input event listener untuk menampilkan teks realtime
  - Counter skor sederhana (tambah & kurang)
- **Papan Skor Game** (`papan_skor/`)
  - Proyek mini: game papan skor untuk 2 pemain
  - Fitur:
    - Skor bertambah per klik untuk masing-masing pemain
    - Sistem win condition berdasarkan skor maksimum
    - Tombol reset game
    - Dropdown untuk mengubah skor maksimum (win score)
    - Efek visual saat menang (warna hijau, animasi congrats GIF)
    - Sound effect: klik tombol & audio kemenangan
    - `classList.replace()` untuk toggle visibility

---

## 📂 Struktur Folder

```bash
.
├── basic-js/
│   ├── first.js              # Variabel, prompt, parseInt
│   ├── type_data.js          # Tipe data (String, Number, Boolean)
│   ├── array.js              # Array & method array
│   ├── object.js             # Object literal & nested object
│   ├── logic.js              # Conditional (if/else, switch)
│   ├── looping.js            # Perulangan (for, while, for..of, for..in)
│   ├── function.js           # Function, scope, try-catch
│   ├── functionArray.js      # forEach, map, filter, reduce, arrow function
│   ├── newFitur.js           # ES6+ (spread, rest, destructuring)
│   ├── minigame.js           # Game tebak angka
│   └── index.html            # HTML untuk menjalankan script
│
├── dom-js/
│   ├── index.html            # Halaman HTML untuk latihan DOM
│   ├── introductionDom.js    # Seleksi, manipulasi, navigasi DOM
│   ├── eventDom.js           # Event handling (onclick, addEventListener)
│   ├── event.html            # HTML untuk event handling
│   ├── app.css               # Styling
│   ├── img/                  # Folder gambar
│   └── pokemon/              # Proyek latihan Pokemon
│
├── cp-javascript-dom/
│   ├── selection/            # Seleksi elemen DOM
│   ├── event/                # Event onclick & addEventListener
│   ├── eventobject/          # Event object & keyboard event
│   ├── eventprevent/         # preventDefault & form handling
│   ├── randomcolor/          # Random color generator
│   └── thiskeyword/          # Keyword this dalam event handler
│
├── async-js/
│   ├── index.html            # Halaman HTML untuk async
│   ├── asyncTimeout.js       # setTimeout & callback
│   ├── test.js               # Latihan logika (FizzBuzz, pola bintang)
│   └── test2.js              # File test (kosong)
│
├── latihan/
│   ├── latihan.js            # Latihan DOM (form, list, counter)
│   └── papan_skor/           # Proyek mini papan skor game
│       ├── skorGame.html
│       ├── skorGame.js
│       ├── skorGame.css
│       ├── button_press.mp3
│       ├── win_audio.mp3
│       └── congrats.gif
│
└── README.md

```

## 🛠️ Tools & Teknologi

- **Bahasa Pemrograman**
  - JavaScript (ES6+)

- **Frontend**
  - HTML5
  - CSS3

- **Tools**
  - Visual Studio Code
  - Browser (Google Chrome / Mozilla Firefox)
  - Git & GitHub

## 🎯 Tujuan Pembelajaran

- Memahami dasar-dasar JavaScript (variabel, tipe data, operator, conditional, loop, function)
- Menguasai fitur modern ES6+ (arrow function, spread/rest, destructuring)
- Menguasai manipulasi DOM menggunakan JavaScript
- Memahami event handling (click, submit, keyboard event, preventDefault)
- Memahami konsep dasar asynchronous JavaScript (setTimeout, callback)
- Melatih logika pemrograman melalui mini game dan latihan
- Membuat proyek mini interaktif (papan skor, random color, note list)
- Menjadi dokumentasi dan arsip pembelajaran pribadi
- Persiapan mempelajari framework JavaScript (React, Vue, dll)

## 📖 Referensi Belajar

- [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools – JavaScript](https://www.w3schools.com/js/)
- [FreeCodeCamp – JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Codepolitan](https://www.codepolitan.com/)
