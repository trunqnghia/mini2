document.addEventListener('DOMContentLoaded', () => {
    
    // Hàm khởi tạo cơ chế quản lý sự kiện tương tác click phân đoạn URL
    const initUrlVisualizer = (blockId) => {
        const rootContainer = document.getElementById(blockId);
        if (!rootContainer) return;

        const segments = rootContainer.querySelectorAll('.url-segment');
        const placeholderText = rootContainer.querySelector('.panel-placeholder');
        const infoBoxes = rootContainer.querySelectorAll('.panel-data');

        segments.forEach(segment => {
            segment.addEventListener('click', () => {
                // 1. Gỡ bỏ trạng thái kích hoạt cũ của các phân đoạn khác
                segments.forEach(seg -> seg.classList.remove('active'));
                
                // 2. Kích hoạt hiệu ứng đường viền nét đứt cho đoạn vừa chọn
                segment.classList.add('active');
                
                // 3. Ẩn văn bản hướng dẫn mặc định
                if (placeholderText) {
                    placeholderText.classList.add('hidden');
                }
                
                // 4. Ẩn toàn bộ nội dung giải thích cũ đang hiển thị
                infoBoxes.forEach(box => box.classList.add('hidden'));
                
                // 5. Quét tìm hộp dữ liệu mục tiêu thông qua data-target và hiển thị
                const targetClass = segment.getAttribute('data-target');
                const activeBox = rootContainer.querySelector(`.${targetClass}`);
                if (activeBox) {
                    activeBox.classList.remove('hidden');
                }
            });
        });
    };

    // Khởi chạy trình tương tác xử lý cấu trúc cho cả 2 khối URL mẫu
    initUrlVisualizer('urlBlock1');
    initUrlVisualizer('urlBlock2');
});
