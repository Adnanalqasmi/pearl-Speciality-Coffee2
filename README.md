<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pearl Specialty Coffee</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

* {
font-family: 'Tajawal', sans-serif;
}

.menu-item {
transition: transform 0.3s ease;
}

.menu-item:hover {
transform: scale(1.05);
}

.admin-card {
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(10px);
}
</style>
</head>
<body class="bg-gray-100">
<!-- القائمة العلوية -->
<nav class="bg-gray-800 text-white p-4">
<div class="container mx-auto flex justify-between items-center">
<h1 class="text-2xl font-bold">Pearl Specialty Coffee</h1>
<div class="space-x-4">
<button onclick="showLoginModal()" class="bg-green-600 px-4 py-2 rounded">تسجيل الدخول</button>
<button onclick="showCart()" class="bg-blue-600 px-4 py-2 rounded">السلة</button>
</div>
</div>
</nav>

<!-- القسم الرئيسي -->
<main class="container mx-auto p-4">
<!-- المشروبات -->
<section class="mb-8">
<h2 class="text-2xl font-bold mb-4 text-gray-800">المشروبات</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- قهوة أمريكية -->
<div class="menu-item bg-white rounded-lg shadow-lg p-4">
<img src="/api/placeholder/300/200" alt="قهوة أمريكية" class="w-full h-48 object-cover rounded mb-4">
<h3 class="text-xl font-bold mb-2">قهوة أمريكية</h3>
<p class="text-gray-600 mb-2">قهوة منقوعة طازجة</p>
<div class="flex justify-between items-center">
<span class="text-lg font-bold">15 ريال</span>
<button onclick="addToCart('قهوة أمريكية', 15)" class="bg-green-600 text-white px-4 py-2 rounded">إضافة للسلة</button>
</div>
</div>

<!-- لاتيه -->
<div class="menu-item bg-white rounded-lg shadow-lg p-4">
<img src="/api/placeholder/300/200" alt="لاتيه" class="w-full h-48 object-cover rounded mb-4">
<h3 class="text-xl font-bold mb-2">لاتيه</h3>
<p class="text-gray-600 mb-2">قهوة مع حليب مبخر</p>
<div class="flex justify-between items-center">
<span class="text-lg font-bold">18 ريال</span>
<button onclick="addToCart('لاتيه', 18)" class="bg-green-600 text-white px-4 py-2 rounded">إضافة للسلة</button>
</div>
</div>

<!-- كابتشينو -->
<div class="menu-item bg-white rounded-lg shadow-lg p-4">
<img src="/api/placeholder/300/200" alt="كابتشينو" class="w-full h-48 object-cover rounded mb-4">
<h3 class="text-xl font-bold mb-2">كابتشينو</h3>
<p class="text-gray-600 mb-2">قهوة مع حليب مبخر ورغوة</p>
<div class="flex justify-between items-center">
<span class="text-lg font-bold">20 ريال</span>
<button onclick="addToCart('كابتشينو', 20)" class="bg-green-600 text-white px-4 py-2 rounded">إضافة للسلة</button>
</div>
</div>
</div>
</section>

<!-- الحلويات -->
<section class="mb-8">
<h2 class="text-2xl font-bold mb-4 text-gray-800">الحلويات</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- كيك الشوكولاتة -->
<div class="menu-item bg-white rounded-lg shadow-lg p-4">
<img src="/api/placeholder/300/200" alt="كيك الشوكولاتة" class="w-full h-48 object-cover rounded mb-4">
<h3 class="text-xl font-bold mb-2">كيك الشوكولاتة</h3>
<p class="text-gray-600 mb-2">كيك طازج بالشوكولاتة الداكنة</p>
<div class="flex justify-between items-center">
<span class="text-lg font-bold">25 ريال</span>
<button onclick="addToCart('كيك الشوكولاتة', 25)" class="bg-green-600 text-white px-4 py-2 rounded">إضافة للسلة</button>
</div>
</div>
</div>
</section>
</main>

<!-- نافذة تسجيل الدخول -->
<div id="loginModal" class="fixed inset-0 bg-black bg-opacity-50 hidden">
<div class="bg-white p-6 rounded-lg w-96 mx-auto mt-20">
<h2 class="text-2xl font-bold mb-4">تسجيل الدخول</h2>
<input type="email" placeholder="البريد الإلكتروني" class="w-full mb-4 p-2 border rounded">
<input type="password" placeholder="كلمة المرور" class="w-full mb-4 p-2 border rounded">
<button onclick="login()" class="bg-green-600 text-white px-4 py-2 rounded w-full">دخول</button>
</div>
</div>

<!-- نافذة السلة -->
<div id="cartModal" class="fixed inset-0 bg-black bg-opacity-50 hidden">
<div class="bg-white p-6 rounded-lg w-96 mx-auto mt-20">
<h2 class="text-2xl font-bold mb-4">السلة</h2>
<div id="cartItems" class="mb-4"></div>
<div class="text-xl font-bold mb-4">المجموع: <span id="cartTotal">0</span> ريال</div>
<button onclick="checkout()" class="bg-green-600 text-white px-4 py-2 rounded w-full">إتمام الطلب</button>
</div>
</div>

<!-- لوحة تحكم المدير -->
<div id="adminPanel" class="hidden fixed inset-0 bg-black bg-opacity-50">
<div class="bg-white p-6 rounded-lg w-full max-w-4xl mx-auto mt-20 max-h-screen overflow-y-auto">
<h2 class="text-2xl font-bold mb-4">لوحة تحكم المدير</h2>

<!-- إحصائيات المبيعات -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div class="admin-card p-4 rounded-lg shadow">
<h3 class="font-bold mb-2">المبيعات اليومية</h3>
<canvas id="dailySalesChart"></canvas>
</div>
<div class="admin-card p-4 rounded-lg shadow">
<h3 class="font-bold mb-2">المنتجات الأكثر مبيعاً</h3>
<canvas id="topProductsChart"></canvas>
</div>
<div class="admin-card p-4 rounded-lg shadow">
<h3 class="font-bold mb-2">إجمالي المبيعات</h3>
<div class="text-3xl font-bold text-green-600">12,450 ريال</div>
</div>
</div>

<!-- إدارة المنتجات -->
<div class="mb-6">
<h3 class="text-xl font-bold mb-4">إدارة المنتجات</h3>
<table class="w-full">
<thead>
<tr class="bg-gray-100">
<th class="p-2 text-right">المنتج</th>
<th class="p-2 text-right">السعر</th>
<th class="p-2 text-right">الصورة</th>
<th class="p-2 text-right">الإجراءات</th>
</tr>
</thead>
<tbody id="productsTable">
<!-- سيتم ملء هذا الجزء بواسطة JavaScript -->
</tbody>
</table>
</div>
</div>
</div>

<script>
// متغيرات عامة
let cart = [];
let isAdmin = false;

// دالة إضافة منتج للسلة
function addToCart(name, price) {
cart.push({ name, price });
updateCart();
}

// دالة تحديث السلة
function updateCart() {
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
let total = 0;

cartItems.innerHTML = cart.map(item => {
total += item.price;
return `<div class="flex justify-between mb-2">
<span>${item.name}</span>
<span>${item.price} ريال</span>
</div>`;
}).join('');

cartTotal.textContent = total;
}

// دالة إظهار نافذة تسجيل الدخول
function showLoginModal() {
document.getElementById('loginModal').classList.remove('hidden');
}

// دالة إظهار السلة
function showCart() {
document.getElementById('cartModal').classList.remove('hidden');
}

// دالة تسجيل الدخول
function login() {
// هنا يتم التحقق من صحة بيانات الدخول
isAdmin = true;
document.getElementById('loginModal').classList.add('hidden');
document.getElementById('adminPanel').classList.remove('hidden');
initializeCharts();
}

// دالة إتمام الطلب
function checkout() {
alert('تم إتمام الطلب بنجاح!');
cart = [];
updateCart();
document.getElementById('cartModal').classList.add('hidden');
}

// دالة تهيئة الرسوم البيانية
function initializeCharts() {
// رسم بياني للمبيعات اليومية
const dailySalesCtx = document.getElementById('dailySalesChart').getContext('2d');
new Chart(dailySalesCtx, {
type: 'line',
data: {
labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
datasets: [{
label: 'المبيعات اليومية',
data: [1200, 1900, 1500, 1800, 2000, 1700, 1600],
borderColor: 'rgb(75, 192, 192)',
tension: 0.1
}]
}
});

// رسم بياني للمنتجات الأكثر مبيعاً
const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
new Chart(topProductsCtx, {
type: 'doughnut',
data: {
labels: ['قهوة أمريكية', 'لاتيه', 'كابتشينو', 'كيك الشوكولاتة'],
datasets: [{
data: [30, 25, 20, 25],
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(75, 192, 192)'
]
}]
}
});
}

// إغلاق النوافذ المنبثقة عند النقر خارجها
window.onclick = function(event) {
const modals = [
document.getElementById('loginModal'),
document.getElementById('cartModal'),
document.getElementById('adminPanel')
];

modals.forEach(modal => {
if (event.target === modal) {
modal.classList.add('hidden');
}
});
}
</script>
</body>
</html>
