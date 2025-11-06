// Global variables
let selectedFiles = [];
let imageDataUrls = [];
let currentLanguage = 'en';

// Language data
const languages = {
    en: {
        title: 'PDF Baker',
        subtitle: 'Images to PDF. Simply.',
        dropTitle: 'Drag images here',
        selectFiles: 'Select Files',
        selectedImages: 'Selected Images',
        settings: 'Settings',
        pageSize: 'Page Size',
        orientation: 'Orientation',
        quality: 'Quality',
        pageSizes: {
            a4: 'A4',
            a3: 'A3',
            letter: 'Letter',
            custom: 'Auto Fit'
        },
        orientations: {
            portrait: 'Portrait',
            landscape: 'Landscape'
        },
        qualities: {
            high: 'High',
            good: 'Good',
            medium: 'Medium',
            low: 'Low'
        },
        createPDF: 'Create PDF',
        restart: 'Restart',
        copyright: '© 2024 PDF Baker',
        footer: {
            about: 'About',
            userGuide: 'User Guide',
            privacy: 'Privacy Policy'
        },
        messages: {
            selectImages: 'Please select image files.',
            selectForConvert: 'Please select images to convert.',
            pdfCreated: 'PDF created:',
            conversionError: 'An error occurred during PDF conversion. Please try again.'
        }
    },
    ja: {
        title: 'PDF Baker',
        subtitle: '画像をPDFに。シンプルに。',
        dropTitle: '画像をここにドロップしてください',
        selectFiles: 'ファイル選択',
        selectedImages: '選択された画像',
        settings: '設定',
        pageSize: 'ページサイズ',
        orientation: '向き',
        quality: '品質',
        pageSizes: {
            a4: 'A4',
            a3: 'A3',
            letter: 'Letter',
            custom: '自動調整'
        },
        orientations: {
            portrait: '縦',
            landscape: '横'
        },
        qualities: {
            high: '最高',
            good: '高',
            medium: '中',
            low: '低'
        },
        createPDF: 'PDF作成',
        restart: 'やり直し',
        copyright: '© 2024 PDF Baker',
        footer: {
            about: 'アプリについて',
            userGuide: 'ユーザーガイド',
            privacy: 'プライバシーポリシー'
        },
        messages: {
            selectImages: '画像ファイルを選択してください。',
            selectForConvert: '変換する画像を選択してください。',
            pdfCreated: 'PDFが作成されました：',
            conversionError: 'PDF変換中にエラーが発生しました。もう一度お試しください。'
        }
    },
    zh: {
        title: 'PDF Baker',
        subtitle: '图片转PDF，简单易用。',
        dropTitle: '将图片拖到这里',
        selectFiles: '选择文件',
        selectedImages: '已选择的图片',
        settings: '设置',
        pageSize: '页面大小',
        orientation: '方向',
        quality: '质量',
        pageSizes: {
            a4: 'A4',
            a3: 'A3',
            letter: 'Letter',
            custom: '自动适应'
        },
        orientations: {
            portrait: '竖向',
            landscape: '横向'
        },
        qualities: {
            high: '最高',
            good: '高',
            medium: '中',
            low: '低'
        },
        createPDF: '创建PDF',
        restart: '重新开始',
        copyright: '© 2024 PDF Baker',
        footer: {
            about: '关于我们',
            userGuide: '使用指南',
            privacy: '隐私政策'
        },
        messages: {
            selectImages: '请选择图片文件。',
            selectForConvert: '请选择要转换的图片。',
            pdfCreated: 'PDF已创建：',
            conversionError: 'PDF转换时出现错误，请重试。'
        }
    },
    ko: {
        title: 'PDF Baker',
        subtitle: '이미지를 PDF로. 간단하게.',
        dropTitle: '이미지를 여기에 끌어다 놓으세요',
        selectFiles: '파일 선택',
        selectedImages: '선택된 이미지',
        settings: '설정',
        pageSize: '페이지 크기',
        orientation: '방향',
        quality: '품질',
        pageSizes: {
            a4: 'A4',
            a3: 'A3',
            letter: 'Letter',
            custom: '자동 맞춤'
        },
        orientations: {
            portrait: '세로',
            landscape: '가로'
        },
        qualities: {
            high: '최고',
            good: '높음',
            medium: '보통',
            low: '낮음'
        },
        createPDF: 'PDF 만들기',
        restart: '다시 시작',
        copyright: '© 2024 PDF Baker',
        footer: {
            about: '소개',
            userGuide: '사용 가이드',
            privacy: '개인정보 처리방침'
        },
        messages: {
            selectImages: '이미지 파일을 선택해주세요.',
            selectForConvert: '변환할 이미지를 선택해주세요.',
            pdfCreated: 'PDF가 생성되었습니다:',
            conversionError: 'PDF 변환 중 오류가 발생했습니다. 다시 시도해주세요.'
        }
    }
};

// DOM elements
const fileDropArea = document.getElementById('fileDropArea');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const imagePreview = document.getElementById('imagePreview');
const optionsSection = document.getElementById('optionsSection');
const actionSection = document.getElementById('actionSection');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');
const selectFilesButton = document.getElementById('selectFilesButton');
const pageSize = document.getElementById('pageSize');
const orientation = document.getElementById('orientation');
const quality = document.getElementById('quality');

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language or detect browser language with priority
    const savedLanguage = localStorage.getItem('pdfBakerLanguage');
    
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        // Detect browser language with regional priority
        const browserLanguage = navigator.language.toLowerCase();
        const browserRegion = browserLanguage.slice(0, 2);
        
        // Priority order: region-specific > en > ja > zh > ko
        if (browserLanguage.includes('ko') || browserRegion === 'ko') {
            currentLanguage = 'ko';
        } else if (browserLanguage.includes('ja') || browserRegion === 'ja') {
            currentLanguage = 'ja';
        } else if (browserLanguage.includes('zh') || browserRegion === 'zh' || browserLanguage.includes('cn')) {
            currentLanguage = 'zh';
        } else {
            // Default to English for all other regions
            currentLanguage = 'en';
        }
    }
    
    // Set language selector
    document.getElementById('languageSelect').value = currentLanguage;
    
    // Update UI
    updateLanguage();
    setupEventListeners();
});

function setupEventListeners() {
    // Language change event
    document.getElementById('languageSelect').addEventListener('change', handleLanguageChange);
    
    // File input change event
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag and drop events
    fileDropArea.addEventListener('dragover', handleDragOver);
    fileDropArea.addEventListener('dragleave', handleDragLeave);
    fileDropArea.addEventListener('drop', handleDrop);
    fileDropArea.addEventListener('click', () => fileInput.click());
    selectFilesButton.addEventListener('click', (e) => { e.stopPropagation(); fileInput.click(); });
    
    // Button events
    convertButton.addEventListener('click', convertToPDF);
    clearButton.addEventListener('click', clearFiles);
}

function handleLanguageChange(e) {
    currentLanguage = e.target.value;
    localStorage.setItem('pdfBakerLanguage', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    const lang = languages[currentLanguage];
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update text content - check if elements exist before updating
    const elements = {
        'appTitle': lang.title,
        'appSubtitle': lang.subtitle,
        'dropTitle': lang.dropTitle,
        'selectFilesButton': lang.selectFiles,
        'selectedImagesTitle': lang.selectedImages,
        'settingsTitle': lang.settings,
        'pageSizeLabel': lang.pageSize,
        'orientationLabel': lang.orientation,
        'qualityLabel': lang.quality,
        'createPDFText': lang.createPDF,
        'restartText': lang.restart
    };
    
    // Update elements that exist
    for (const [id, text] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }
    
    // Update select options - check if elements exist
    const selectOptions = {
        'pageA4': lang.pageSizes?.a4,
        'pageA3': lang.pageSizes?.a3,
        'pageLetter': lang.pageSizes?.letter,
        'pageCustom': lang.pageSizes?.custom,
        'orientPortrait': lang.orientations?.portrait,
        'orientLandscape': lang.orientations?.landscape,
        'qualityHigh': lang.qualities?.high,
        'qualityGood': lang.qualities?.good,
        'qualityMedium': lang.qualities?.medium,
        'qualityLow': lang.qualities?.low
    };
    
    for (const [id, text] of Object.entries(selectOptions)) {
        const element = document.getElementById(id);
        if (element && text) {
            element.textContent = text;
        }
    }
    
    // Update footer links
    const footerElements = {
        'aboutLink': lang.footer?.about,
        'guideLink': lang.footer?.userGuide,
        'privacyLink': lang.footer?.privacy
    };
    
    for (const [id, text] of Object.entries(footerElements)) {
        const element = document.getElementById(id);
        if (element && text) {
            element.textContent = text;
        }
    }
}

function handleDragOver(e) {
    e.preventDefault();
    fileDropArea.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    fileDropArea.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    fileDropArea.classList.remove('dragover');
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    processFiles(files);
}

function processFiles(files) {
    // Filter only image files
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
        showMessage(languages[currentLanguage].messages.selectImages, 'error');
        return;
    }
    
    selectedFiles = [...selectedFiles, ...imageFiles];
    loadImagePreviews();
    showSections();
}

async function loadImagePreviews() {
    imagePreview.innerHTML = '';
    imageDataUrls = [];
    
    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        try {
            const dataUrl = await fileToDataUrl(file);
            imageDataUrls.push(dataUrl);
            createImagePreviewItem(file, dataUrl, i);
        } catch (error) {
            console.error('Error loading image:', error);
            showMessage(`이미지 로딩 실패: ${file.name}`, 'error');
        }
    }
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function createImagePreviewItem(file, dataUrl, index) {
    const item = document.createElement('div');
    item.className = 'file-item';
    
    item.innerHTML = `
        <img src="${dataUrl}" alt="${file.name}">
        <button class="remove-btn" onclick="removeImage(${index})">&times;</button>
        <div class="file-name">${file.name}</div>
    `;
    
    imagePreview.appendChild(item);
}

function removeImage(index) {
    selectedFiles.splice(index, 1);
    imageDataUrls.splice(index, 1);
    
    if (selectedFiles.length === 0) {
        hideSections();
    } else {
        loadImagePreviews();
    }
}

function showSections() {
    fileList.style.display = 'block';
    optionsSection.style.display = 'block';
    actionSection.style.display = 'block';
}

function hideSections() {
    fileList.style.display = 'none';
    optionsSection.style.display = 'none';
    actionSection.style.display = 'none';
}

function clearFiles() {
    selectedFiles = [];
    imageDataUrls = [];
    fileInput.value = '';
    hideSections();
    hideMessage();
}

async function convertToPDF() {
    if (selectedFiles.length === 0) {
        showMessage(languages[currentLanguage].messages.selectForConvert, 'error');
        return;
    }
    
    // Show loading state and progress bar
    setLoadingState(true);
    showProgressBar();
    
    try {
        const { jsPDF } = window.jspdf;
        
        // Get options
        const pageSizeValue = pageSize.value;
        const orientationValue = orientation.value;
        const qualityValue = parseFloat(quality.value);
        
        // Create PDF
        const pdf = new jsPDF({
            orientation: orientationValue,
            unit: 'mm',
            format: pageSizeValue === 'custom' ? 'a4' : pageSizeValue
        });
        
        // Process each image
        for (let i = 0; i < imageDataUrls.length; i++) {
            const dataUrl = imageDataUrls[i];
            
            // Update progress
            updateProgress((i / imageDataUrls.length) * 90); // 90% for processing
            
            try {
                // Load image to get dimensions
                const img = await loadImage(dataUrl);
                
                // Calculate dimensions
                const dimensions = calculateImageDimensions(img, pdf, pageSizeValue, orientationValue);
                
                // Add new page for subsequent images
                if (i > 0) {
                    pdf.addPage();
                }
                
                // Add image to PDF
                pdf.addImage(
                    dataUrl,
                    'JPEG',
                    dimensions.x,
                    dimensions.y,
                    dimensions.width,
                    dimensions.height,
                    undefined,
                    'FAST',
                    0
                );
                
            } catch (error) {
                console.error(`Error processing image ${i + 1}:`, error);
                showMessage(`이미지 ${i + 1} 처리 중 오류가 발생했습니다.`, 'error');
            }
        }
        
        // Update progress to 95%
        updateProgress(95);
        
        // Generate filename
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        const filename = `images-to-pdf-${timestamp}.pdf`;
        
        // Complete progress
        updateProgress(100);
        
        // Save PDF
        pdf.save(filename);
        
        showMessage(`${languages[currentLanguage].messages.pdfCreated} ${filename}`, 'success');
        
    } catch (error) {
        console.error('PDF conversion error:', error);
        showMessage(languages[currentLanguage].messages.conversionError, 'error');
    } finally {
        setLoadingState(false);
        hideProgressBar();
    }
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function calculateImageDimensions(img, pdf, pageSizeValue, orientationValue) {
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    
    if (pageSizeValue === 'custom') {
        // Fit to image size with some margin
        const margin = 10;
        const maxWidth = pageWidth - (margin * 2);
        const maxHeight = pageHeight - (margin * 2);
        
        let { width, height } = fitImageToBox(img.width, img.height, maxWidth, maxHeight);
        
        return {
            x: (pageWidth - width) / 2,
            y: (pageHeight - height) / 2,
            width,
            height
        };
    } else {
        // Fit to page with margin
        const margin = 10; // 여백을 20mm에서 10mm로 줄여 이미지를 더 크게 표시합니다.
        const maxWidth = pageWidth - (margin * 2);
        const maxHeight = pageHeight - (margin * 2);
        
        let { width, height } = fitImageToBox(img.width, img.height, maxWidth, maxHeight);
        
        return {
            x: (pageWidth - width) / 2,
            y: (pageHeight - height) / 2,
            width,
            height
        };
    }
}

function fitImageToBox(imgWidth, imgHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
    return {
        width: imgWidth * ratio,
        height: imgHeight * ratio
    };
}

function setLoadingState(loading) {
    const buttonText = convertButton.querySelector('.button-text');
    const loadingSpinner = convertButton.querySelector('.loading-spinner');
    
    if (loading) {
        buttonText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        convertButton.disabled = true;
        convertButton.style.cursor = 'not-allowed';
    } else {
        buttonText.style.display = 'inline-block';
        loadingSpinner.style.display = 'none';
        convertButton.disabled = false;
        convertButton.style.cursor = 'pointer';
    }
}

function showMessage(message, type = 'success') {
    // Remove existing messages
    hideMessage();
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message show`;
    messageDiv.textContent = message;
    
    // Insert after main element
    const main = document.querySelector('main');
    main.appendChild(messageDiv);
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        hideMessage();
    }, 4000);
}

function hideMessage() {
    const messages = document.querySelectorAll('.success-message, .error-message');
    messages.forEach(msg => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 200);
    });
}

// Progress bar functions for Pompidou design
function showProgressBar() {
    const progressContainer = document.getElementById('progressContainer');
    if (progressContainer) {
        progressContainer.style.display = 'block';
        updateProgress(0);
    }
}

function hideProgressBar() {
    const progressContainer = document.getElementById('progressContainer');
    if (progressContainer) {
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 1000);
    }
}

function updateProgress(percentage) {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

// Utility function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Error handling for missing jsPDF
window.addEventListener('error', function(e) {
    if (e.message.includes('jsPDF')) {
        showMessage('PDF 라이브러리 로딩에 실패했습니다. 페이지를 새로고침해주세요.', 'error');
    }
});

// Check if jsPDF is loaded
window.addEventListener('load', function() {
    if (typeof window.jspdf === 'undefined') {
        showMessage('PDF 변환 라이브러리가 로드되지 않았습니다. 인터넷 연결을 확인해주세요.', 'error');
    }
});