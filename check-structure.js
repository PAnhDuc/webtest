const fs = require("fs");
const path = require("path");

// Danh sách file và thư mục bắt buộc
const REQUIRED_STRUCTURE = [
  "public/",
  "src/",
  "src/assets/",
  "src/components/",
  "src/pages/",
  "src/styles/",
  "src/utils/",
  "package.json",
  "README.md",
];

// Hàm kiểm tra cấu trúc
const checkStructure = (basePath) => {
  const missingItems = [];

  REQUIRED_STRUCTURE.forEach((item) => {
    const fullPath = path.join(basePath, item);
    if (!fs.existsSync(fullPath)) {
      missingItems.push(item); // Nếu không tồn tại, thêm vào danh sách thiếu
    }
  });

  if (missingItems.length > 0) {
    console.error("\n❌ Cấu trúc dự án không hợp lệ. Thiếu:");
    missingItems.forEach((item) => console.error(`  - ${item}`));
    process.exit(1); // Thoát nếu cấu trúc không hợp lệ
  } else {
    console.log("\n✅ Cấu trúc dự án hợp lệ!");
  }
};

// Thực hiện kiểm tra
checkStructure(process.cwd());
