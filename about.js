// About page multi-language support
let currentLanguage = 'en';

// Language data for About page
const aboutLanguages = {
    en: {
        backLink: '← Back to PDF Baker',
        pageTitle: 'About PDF Baker',
        description: 'PDF Baker is a free, fast, and secure image-to-PDF converter that works entirely in your browser. No uploads, no registration, no limits - just simple, efficient PDF conversion.',
        featuresTitle: 'Key Features',
        feature1: '100% client-side processing - your files never leave your device',
        feature2: 'Support for multiple image formats (JPG, PNG, GIF, WEBP)',
        feature3: 'Batch conversion - process multiple images at once',
        feature4: 'Customizable page sizes and orientations',
        feature5: 'Mobile-friendly interface with drag & drop support',
        feature6: 'No file size limits or watermarks',
        technologyTitle: 'Technology',
        technologyDesc: 'Built with modern web technologies including HTML5, CSS3, and JavaScript. Uses the jsPDF library for reliable PDF generation. Designed with Steve Jobs\' minimalist design philosophy - where simplicity meets functionality.',
        privacyTitle: 'Privacy & Security',
        privacyDesc: 'Your privacy is our priority. All image processing happens locally in your browser. No data is transmitted to our servers. No tracking, no analytics, no data collection.'
    },
    ja: {
        backLink: '← PDF Bakerに戻る',
        pageTitle: 'PDF Bakerについて',
        description: 'PDF Bakerは、ブラウザで完全に動作する無料、高速、安全な画像からPDFへのコンバーターです。アップロード不要、登録不要、制限なし - シンプルで効率的なPDF変換。',
        featuresTitle: '主な機能',
        feature1: '100%クライアントサイド処理 - ファイルはデバイスから外に出ません',
        feature2: '複数の画像形式をサポート（JPG、PNG、GIF、WEBP）',
        feature3: 'バッチ変換 - 複数の画像を一度に処理',
        feature4: 'カスタマイズ可能なページサイズと向き',
        feature5: 'ドラッグ&ドロップ対応のモバイルフレンドリーインターフェース',
        feature6: 'ファイルサイズ制限や透かしなし',
        technologyTitle: 'テクノロジー',
        technologyDesc: 'HTML5、CSS3、JavaScriptなどの最新ウェブ技術で構築。信頼性の高いPDF生成にjsPDFライブラリを使用。スティーブ・ジョブズのミニマリストデザイン哲学に基づいて設計 - シンプルさと機能性の融合。',
        privacyTitle: 'プライバシーとセキュリティ',
        privacyDesc: 'あなたのプライバシーが私たちの優先事項です。すべての画像処理はブラウザ内でローカルに行われます。サーバーにデータは送信されません。追跡、分析、データ収集は一切ありません。'
    },
    zh: {
        backLink: '← 返回PDF Baker',
        pageTitle: '关于PDF Baker',
        description: 'PDF Baker是一个免费、快速、安全的图片转PDF转换器，完全在您的浏览器中运行。无需上传，无需注册，无限制 - 只需简单高效的PDF转换。',
        featuresTitle: '主要功能',
        feature1: '100%客户端处理 - 您的文件永远不会离开您的设备',
        feature2: '支持多种图片格式（JPG、PNG、GIF、WEBP）',
        feature3: '批量转换 - 一次处理多张图片',
        feature4: '可自定义页面大小和方向',
        feature5: '支持拖放的移动友好界面',
        feature6: '无文件大小限制或水印',
        technologyTitle: '技术',
        technologyDesc: '使用HTML5、CSS3和JavaScript等现代网络技术构建。使用jsPDF库进行可靠的PDF生成。采用史蒂夫·乔布斯的极简主义设计哲学设计 - 简约与功能的结合。',
        privacyTitle: '隐私与安全',
        privacyDesc: '您的隐私是我们的首要任务。所有图片处理都在您的浏览器中本地进行。没有数据传输到我们的服务器。没有跟踪，没有分析，没有数据收集。'
    },
    ko: {
        backLink: '← PDF Baker로 돌아가기',
        pageTitle: 'PDF Baker 소개',
        description: 'PDF Baker는 브라우저에서 완전히 작동하는 무료, 빠르고 안전한 이미지-PDF 변환기입니다. 업로드 없음, 등록 없음, 제한 없음 - 단순하고 효율적인 PDF 변환.',
        featuresTitle: '주요 기능',
        feature1: '100% 클라이언트 사이드 처리 - 파일이 기기를 떠나지 않음',
        feature2: '다양한 이미지 형식 지원 (JPG, PNG, GIF, WEBP)',
        feature3: '일괄 변환 - 여러 이미지를 한 번에 처리',
        feature4: '사용자 정의 가능한 페이지 크기와 방향',
        feature5: '드래그 앤 드롭 지원 모바일 친화적 인터페이스',
        feature6: '파일 크기 제한이나 워터마크 없음',
        technologyTitle: '기술',
        technologyDesc: 'HTML5, CSS3, JavaScript 등 최신 웹 기술로 구축. 안정적인 PDF 생성을 위해 jsPDF 라이브러리 사용. 스티브 잡스의 미니멀리스트 디자인 철학으로 설계 - 단순함과 기능성의 만남.',
        privacyTitle: '개인정보 보호 및 보안',
        privacyDesc: '귀하의 개인정보 보호가 우리의 우선순위입니다. 모든 이미지 처리는 브라우저에서 로컬로 수행됩니다. 서버로 데이터가 전송되지 않습니다. 추적, 분석, 데이터 수집이 없습니다.'
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'ja', 'zh', 'ko'];
    
    // Set initial language based on browser or default to English
    currentLanguage = supportedLangs.includes(browserLang) ? browserLang : 'en';
    
    // Update language selector
    document.getElementById('languageSelect').value = currentLanguage;
    
    // Update page content
    updateLanguage();
    
    // Add language selector event listener
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        currentLanguage = e.target.value;
        updateLanguage();
        // Save language preference
        localStorage.setItem('pdfBakerLanguage', currentLanguage);
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('pdfBakerLanguage');
    if (savedLanguage && supportedLangs.includes(savedLanguage)) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = currentLanguage;
        updateLanguage();
    }
});

function updateLanguage() {
    const lang = aboutLanguages[currentLanguage];
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update all text content
    document.getElementById('backLink').textContent = lang.backLink;
    document.getElementById('pageTitle').textContent = lang.pageTitle;
    document.getElementById('description').textContent = lang.description;
    document.getElementById('featuresTitle').textContent = lang.featuresTitle;
    document.getElementById('feature1').textContent = lang.feature1;
    document.getElementById('feature2').textContent = lang.feature2;
    document.getElementById('feature3').textContent = lang.feature3;
    document.getElementById('feature4').textContent = lang.feature4;
    document.getElementById('feature5').textContent = lang.feature5;
    document.getElementById('feature6').textContent = lang.feature6;
    document.getElementById('technologyTitle').textContent = lang.technologyTitle;
    document.getElementById('technologyDesc').textContent = lang.technologyDesc;
    document.getElementById('privacyTitle').textContent = lang.privacyTitle;
    document.getElementById('privacyDesc').textContent = lang.privacyDesc;
}