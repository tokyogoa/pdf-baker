import { initializeLanguageSwitcher } from './shared/language.js';

// Global variables
let selectedFiles = [];
let imageDataUrls = [];

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
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher(updateLanguage);
    setupEventListeners();
});

function setupEventListeners() {
    // Language change is handled by initializeLanguageSwitcher,
    // which calls updateLanguage. We don't need a separate listener here
    // if it's already handled in the shared script.
    // document.getElementById('languageSelect').addEventListener('change', handleLanguageChange);
    
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

function updateLanguage(language) {
    const currentLanguage = language || document.getElementById('languageSelect').value;
    const lang = languages[currentLanguage];
    if (!lang) return; // Exit if language data is not yet available

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
    const currentLanguage = document.getElementById('languageSelect').value;
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
            const dataUrl = await getCorrectlyOrientedImage(file);
            imageDataUrls.push(dataUrl);
            createImagePreviewItem(file, dataUrl, i);
        } catch (error) {
            console.error('Error loading image:', error);
            showMessage(`이미지 로딩 실패: ${file.name}`, 'error');
        }
    }
}

/**
 * Reads EXIF orientation and returns a correctly oriented image as a data URL.
 * @param {File} file The image file.
 * @returns {Promise<string>} A promise that resolves with the data URL of the oriented image.
 */
function getCorrectlyOrientedImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader(); // For EXIF data
        reader.onload = (e) => {
            const view = new DataView(e.target.result);
            if (view.getUint16(0, false) !== 0xFFD8) {
                // Not a JPEG, return original data URL
                return resolve(URL.createObjectURL(file));
            }
            let length = view.byteLength, offset = 2, orientation = -1;
            while (offset < length) {
                if (view.getUint16(offset + 2, false) <= 8) break;
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xFFE1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) break;
                    const little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                        if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                            orientation = view.getUint16(offset + (i * 12) + 8, little);
                            break;
                        }
                    }
                    break;
                } else if ((marker & 0xFF00) !== 0xFF00) break;
                else offset += view.getUint16(offset, false);
            }

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                let width = img.width, height = img.height;

                if (orientation > 4 && orientation < 9) {
                    canvas.width = height;
                    canvas.height = width;
                } else {
                    canvas.width = width;
                    canvas.height = height;
                }

                switch (orientation) {
                    case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                    case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
                    case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
                    case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                    case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
                    case 7: ctx.transform(0, -1, -1, 0, height, width); break;
                    case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                    default: ctx.transform(1, 0, 0, 1, 0, 0);
                }

                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/jpeg'));
            };
            img.onerror = reject;
            img.src = URL.createObjectURL(file);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
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
    const currentLanguage = document.getElementById('languageSelect').value;
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
        const compression = getCompressionType(quality.value);
        
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
                    compression,
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

        // --- NEW: Share or Save Logic ---
        const pdfBlob = pdf.output('blob');
        const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

        // Check if Web Share API is available and can share files
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
            try {
                // Use Web Share API on mobile
                await navigator.share({
                    files: [pdfFile],
                    title: filename,
                    text: 'PDF created with PDF Baker',
                });
                showMessage('PDF shared successfully!', 'success');
            } catch (shareError) {
                // Handle share cancellation or error
                console.log('Share was cancelled or failed', shareError);
                showMessage('Share cancelled. You can download the file instead.', 'info');
                pdf.save(filename); // Fallback to download if share is cancelled
            }
        } else {
            // Fallback to direct download on desktop or unsupported browsers
            pdf.save(filename);
            showMessage(`${languages[currentLanguage].messages.pdfCreated} ${filename}`, 'success');
        }
        
    } catch (error) {
        console.error('PDF conversion error:', error);
        showMessage(languages[currentLanguage].messages.conversionError, 'error');
    } finally {
        setLoadingState(false);
        hideProgressBar();
    }
}

function getCompressionType(qualityValue) {
    switch (qualityValue) {
        case 'high':
            return 'NONE'; // No compression for highest quality
        case 'good':
            return 'FAST'; // Fast is a good balance
        case 'medium':
            return 'MEDIUM';
        case 'low':
            return 'SLOW'; // Ironically, SLOW gives better compression (smaller size)
        default:
            return 'FAST';
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

function showMessage(message, type = 'success', duration = 4000) {
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
    }, duration);
}

function hideMessage() {
    const messages = document.querySelectorAll('.success-message, .error-message, .info-message');
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