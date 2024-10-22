<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pearl Speciality Coffee</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #343a40;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #6c757d;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .menu-section, .edit-section, .login-section {
            margin: 20px 0;
        }
        .menu-section h2, .edit-section h2, .login-section h2 {
            border-bottom: 2px solid #6c757d;
            padding-bottom: 10px;
        }
        .menu-item, .edit-section input, .edit-section button, .login-section input, .login-section button {
            margin: 10px 0;
            padding: 10px;
            width: 100%;
        }
        .edit-section, .login-section {
            padding: 10px;
            border: 1px solid #6c757d;
            background-color: #e9ecef;
        }
    </style>
</head>
<body>
    <header>
        <h1>Pearl Speciality Coffee</h1>
    </header>
    <div class="container">
        <div class="menu-section">
            <h2>المشروبات</h2>
            <div class="menu-item">قهوة أمريكية</div>
            <div class="menu-item">لاتيه</div>
            <div class="menu-item">كابتشينو</div>
            <div class="menu-item">إسبريسو</div>
            <div class="menu-item">شاي أخضر</div>
        </div>
        <div class="menu-section">
            <h2>الحلويات</h2>
            <div class="menu-item">كيك الشوكولاتة</div>
            <div class="menu-item">تشيز كيك</div>
            <div class="menu-item">مافن التوت</div>
            <div class="menu-item">كوكيز</div>
            <div class="menu-item">تارت الفواكه</div>
        </div>
        <div class="edit-section">
            <h2>تعديل المنتجات</h2>
            <input type="text" id="product-name" placeholder="اسم المنتج">
            <button onclick="addProduct()">إضافة المنتج</button>
        </div>
        <div class="login-section">
            <h2>تسجيل الدخول</h2>
            <input type="text" id="username" placeholder="اسم المستخدم">
            <input type="password" id="password" placeholder="كلمة المرور">
            <button onclick="login()">تسجيل الدخول</button>
        </div>
    </div>
    <script>
        function addProduct() {
            var productName = document.getElementById('product-name').value;
            if (productName) {
                var newProduct = document.createElement('div');
                newProduct.className = 'menu-item';
                newProduct.textContent = productName;
                document.querySelector('.menu-section').appendChild(newProduct);
                document.getElementById('product-name').value = '';
            }
        }

        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === 'manager' && password === 'manager123') {
                alert('مرحبًا، مدير!');
            } else if (username === 'employee1' && password === 'employee123') {
                alert('مرحبًا، موظف 1!');
            } else if (username === 'employee2' && password === 'employee123') {
                alert('مرحبًا، موظف 2!');
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        }
    </script>
</body>
</html>
