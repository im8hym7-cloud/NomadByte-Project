// NomadByte Project - Logic & Actions

// 1. وظيفة فتح وإغلاق نافذة إضافة شحنة
function toggleModal() {
    const modal = document.getElementById('shipmentModal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// 2. برمجة حفظ الشحنة وإضافتها للجدول (المهمة 6 و 7)
function saveShipment() {
    // الحصول على القيم من الحقول
    const id = document.getElementById('shipmentID').value;
    const client = document.getElementById('clientName').value;
    const status = document.getElementById('status').value;

    if(id && client) {
        // إضافة سطر جديد للجدول
        const table = document.getElementById('shipmentTableBody');
        const newRow = table.insertRow();
        
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${client}</td>
            <td><span class="status-badge">${status}</span></td>
            <td>${new Date().toLocaleDateString()}</td>
        `;

        // إظهار رسالة نجاح
        alert('✅ تم حفظ الشحنة بنجاح في نظام NomadByte!');
        
        // إغلاق النافذة وتفريغ الحقول
        toggleModal();
        document.getElementById('shipmentForm').reset();
    } else {
        alert('الرجاء تعبئة كافة الحقول!');
    }
}
