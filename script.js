const scrollBtn = document.getElementById("scrollTopBtn");

// إظهار الزر عند التمرير
window.onscroll = function () {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
};

// عند النقر، ارجع للأعلى بسلاسة
scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menuList = document.getElementById("menuList");
    const menuLinks = document.querySelectorAll("#menuList li a");

    menuBtn.addEventListener("click", function (event) {
        menuList.classList.toggle("show-menu"); // إظهار وإخفاء القائمة
        menuBtn.classList.toggle("active"); // تغيير شكل الأيقونة
        event.stopPropagation(); // منع انتشار الحدث حتى لا يُغلق القائمة فورًا
    });

    document.addEventListener("click", function (event) {
        if (!menuList.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            closeMenu(); // إخفاء القائمة عند الضغط على رابط
        });
    });

    function closeMenu() {
        menuList.classList.remove("show-menu");
        menuBtn.classList.remove("active");
    }
});
