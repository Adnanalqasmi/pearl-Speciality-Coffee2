```javascript // تعريف المستخدمين وصلاحياتهم const users = { admin: { username: 'admin', password: 'admin123', role: 'admin', permissions: ['manage_orders', 'manage_products', 'manage_employees', 'view_reports'] }, emp1: { username: 'emp1', password: 'emp123', role: 'employee', permissions: ['view_orders', 'create_orders', 'update_orders'] }, emp2: { username: 'emp2', password: 'emp456', role: 'employee', permissions: ['view_orders', 'create_orders', 'update_orders'] } }; // دالة التحقق من تسجيل الدخول function login(username, password) { const user = Object.values(users).find(u => u.username === username && u.password === password ); if (user) { // تخزين بيانات المستخدم في localStorage localStorage.setItem('currentUser', JSON.stringify({ username: user.username, role: user.role, permissions: user.permissions })); return true; } return false; } // دالة التحقق من الصلاحيات function checkPermission(permission) { const currentUser = JSON.parse(localStorage.getItem('currentUser')); return currentUser && currentUser.permissions.includes(permission); } // دالة تسجيل الخروج function logout() { localStorage.removeItem('currentUser'); window.location.href = 'login.html'; } // دالة التحقق من حالة تسجيل الدخول function checkLoginStatus() { const currentUser = localStorage.getItem('currentUser'); if (!currentUser) { window.location.href = 'login.html'; return false; } return true; } ``` 