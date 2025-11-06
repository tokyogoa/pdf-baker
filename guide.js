// User Guide page multi-language support
let currentLanguage = 'en';

// Language data for User Guide page
const guideLanguages = {
    en: {
        backLink: '← Back to PDF Baker',
        pageTitle: 'User Guide',
        description: 'Learn how to use PDF Baker to convert your images to PDF files quickly and easily.',
        stepsTitle: 'How to Convert Images to PDF',
        step1: '<strong>Select Images:</strong> Click the upload area or drag and drop your image files. Supported formats: JPG, PNG, GIF, WEBP.',
        step2: '<strong>Review Selection:</strong> Preview your selected images. You can remove individual images by clicking the red remove button.',
        step3: '<strong>Configure Settings:</strong> Choose your preferred page size (A4, A3, Letter) and orientation (Portrait or Landscape).',
        step4: '<strong>Create PDF:</strong> Click the "Create PDF" button. The progress bar will show conversion status.',
        step5: '<strong>Download:</strong> Your PDF will automatically download when ready. The file will be named with a timestamp for easy identification.',
        tip1: 'TIP: You can select multiple images at once for batch conversion. The order of images in the PDF will match the order they appear in the preview.',
        troubleshootTitle: 'Troubleshooting',
        troubleshoot1: '<strong>Large Files:</strong> Very large images may take longer to process. Consider resizing images before conversion for faster results.',
        troubleshoot2: '<strong>Browser Issues:</strong> If conversion fails, try refreshing the page and ensure you\'re using a modern browser (Chrome, Firefox, Safari, Edge).',
        troubleshoot3: '<strong>Mobile Usage:</strong> On mobile devices, you can access your camera directly from the file selector to convert photos instantly.',
        supportedTitle: 'Supported Formats',
        supportedDesc: '<strong>Input:</strong> JPG, JPEG, PNG, GIF, WEBP<br><strong>Output:</strong> PDF (Portable Document Format)<br><strong>Page Sizes:</strong> A4, A3, Letter, Auto-fit<br><strong>Orientations:</strong> Portrait, Landscape'
    },
    ja: {
        backLink: '← PDF Bakerに戻る',
        pageTitle: 'ユーザーガイド',
        description: 'PDF Bakerを使用して画像をPDFファイルに迅速かつ簡単に変換する方法を学びます。',
        stepsTitle: '画像をPDFに変換する方法',
        step1: '<strong>画像を選択:</strong> アップロード領域をクリックするか、画像ファイルをドラッグアンドドロップします。対応形式：JPG、PNG、GIF、WEBP。',
        step2: '<strong>選択を確認:</strong> 選択した画像をプレビューします。赤い削除ボタンをクリックして個々の画像を削除できます。',
        step3: '<strong>設定を構成:</strong> 希望するページサイズ（A4、A3、レター）と向き（縦または横）を選択します。',
        step4: '<strong>PDF作成:</strong> 「PDF作成」ボタンをクリックします。プログレスバーが変換状況を表示します。',
        step5: '<strong>ダウンロード:</strong> 準備ができるとPDFが自動的にダウンロードされます。ファイルは識別しやすいようにタイムスタンプで名前が付けられます。',
        tip1: 'ヒント：バッチ変換のために一度に複数の画像を選択できます。PDF内の画像の順序は、プレビューに表示される順序と一致します。',
        troubleshootTitle: 'トラブルシューティング',
        troubleshoot1: '<strong>大きなファイル:</strong> 非常に大きな画像は処理に時間がかかる場合があります。より高速な結果を得るために、変換前に画像のサイズを変更することを検討してください。',
        troubleshoot2: '<strong>ブラウザの問題:</strong> 変換が失敗した場合は、ページを更新し、最新のブラウザ（Chrome、Firefox、Safari、Edge）を使用していることを確認してください。',
        troubleshoot3: '<strong>モバイル使用:</strong> モバイルデバイスでは、ファイルセレクターから直接カメラにアクセスして、写真を瞬時に変換できます。',
        supportedTitle: '対応形式',
        supportedDesc: '<strong>入力:</strong> JPG、JPEG、PNG、GIF、WEBP<br><strong>出力:</strong> PDF（Portable Document Format）<br><strong>ページサイズ:</strong> A4、A3、レター、自動フィット<br><strong>向き:</strong> 縦、横'
    },
    zh: {
        backLink: '← 返回PDF Baker',
        pageTitle: '使用指南',
        description: '学习如何使用PDF Baker快速轻松地将图片转换为PDF文件。',
        stepsTitle: '如何将图片转换为PDF',
        step1: '<strong>选择图片:</strong> 点击上传区域或拖放您的图片文件。支持格式：JPG、PNG、GIF、WEBP。',
        step2: '<strong>查看选择:</strong> 预览您选择的图片。您可以通过点击红色删除按钮来删除单个图片。',
        step3: '<strong>配置设置:</strong> 选择您偏好的页面大小（A4、A3、Letter）和方向（纵向或横向）。',
        step4: '<strong>创建PDF:</strong> 点击"创建PDF"按钮。进度条将显示转换状态。',
        step5: '<strong>下载:</strong> 准备就绪时，您的PDF将自动下载。文件将使用时间戳命名以便识别。',
        tip1: '提示：您可以一次选择多个图片进行批量转换。PDF中图片的顺序将与它们在预览中出现的顺序相匹配。',
        troubleshootTitle: '故障排除',
        troubleshoot1: '<strong>大文件:</strong> 非常大的图片可能需要更长时间处理。考虑在转换前调整图片大小以获得更快的结果。',
        troubleshoot2: '<strong>浏览器问题:</strong> 如果转换失败，请尝试刷新页面并确保您使用的是现代浏览器（Chrome、Firefox、Safari、Edge）。',
        troubleshoot3: '<strong>移动设备使用:</strong> 在移动设备上，您可以直接从文件选择器访问相机以即时转换照片。',
        supportedTitle: '支持的格式',
        supportedDesc: '<strong>输入:</strong> JPG、JPEG、PNG、GIF、WEBP<br><strong>输出:</strong> PDF（便携式文档格式）<br><strong>页面大小:</strong> A4、A3、Letter、自动适应<br><strong>方向:</strong> 纵向、横向'
    },
    ko: {
        backLink: '← PDF Baker로 돌아가기',
        pageTitle: '사용 가이드',
        description: 'PDF Baker를 사용하여 이미지를 PDF 파일로 빠르고 쉽게 변환하는 방법을 배워보세요.',
        stepsTitle: '이미지를 PDF로 변환하는 방법',
        step1: '<strong>이미지 선택:</strong> 업로드 영역을 클릭하거나 이미지 파일을 드래그 앤 드롭하세요. 지원 형식: JPG, PNG, GIF, WEBP.',
        step2: '<strong>선택 검토:</strong> 선택한 이미지를 미리 봅니다. 빨간색 제거 버튼을 클릭하여 개별 이미지를 제거할 수 있습니다.',
        step3: '<strong>설정 구성:</strong> 선호하는 페이지 크기(A4, A3, Letter)와 방향(세로 또는 가로)을 선택하세요.',
        step4: '<strong>PDF 생성:</strong> "PDF 만들기" 버튼을 클릭하세요. 진행률 표시줄이 변환 상태를 보여줍니다.',
        step5: '<strong>다운로드:</strong> 준비가 되면 PDF가 자동으로 다운로드됩니다. 파일은 쉬운 식별을 위해 타임스탬프로 이름이 지정됩니다.',
        tip1: '팁: 일괄 변환을 위해 한 번에 여러 이미지를 선택할 수 있습니다. PDF 내 이미지 순서는 미리 보기에 나타나는 순서와 일치합니다.',
        troubleshootTitle: '문제 해결',
        troubleshoot1: '<strong>큰 파일:</strong> 매우 큰 이미지는 처리하는 데 더 오래 걸릴 수 있습니다. 더 빠른 결과를 위해 변환 전에 이미지 크기를 조정하는 것을 고려하세요.',
        troubleshoot2: '<strong>브라우저 문제:</strong> 변환이 실패하면 페이지를 새로 고치고 최신 브라우저(Chrome, Firefox, Safari, Edge)를 사용하고 있는지 확인하세요.',
        troubleshoot3: '<strong>모바일 사용:</strong> 모바일 기기에서는 파일 선택기에서 직접 카메라에 액세스하여 사진을 즉시 변환할 수 있습니다.',
        supportedTitle: '지원 형식',
        supportedDesc: '<strong>입력:</strong> JPG, JPEG, PNG, GIF, WEBP<br><strong>출력:</strong> PDF (Portable Document Format)<br><strong>페이지 크기:</strong> A4, A3, Letter, 자동 맞춤<br><strong>방향:</strong> 세로, 가로'
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
    const lang = guideLanguages[currentLanguage];
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update all text content
    document.getElementById('backLink').textContent = lang.backLink;
    document.getElementById('pageTitle').textContent = lang.pageTitle;
    document.getElementById('description').textContent = lang.description;
    document.getElementById('stepsTitle').textContent = lang.stepsTitle;
    document.getElementById('step1').innerHTML = lang.step1;
    document.getElementById('step2').innerHTML = lang.step2;
    document.getElementById('step3').innerHTML = lang.step3;
    document.getElementById('step4').innerHTML = lang.step4;
    document.getElementById('step5').innerHTML = lang.step5;
    document.getElementById('tip1').innerHTML = lang.tip1;
    document.getElementById('troubleshootTitle').textContent = lang.troubleshootTitle;
    document.getElementById('troubleshoot1').innerHTML = lang.troubleshoot1;
    document.getElementById('troubleshoot2').innerHTML = lang.troubleshoot2;
    document.getElementById('troubleshoot3').innerHTML = lang.troubleshoot3;
    document.getElementById('supportedTitle').textContent = lang.supportedTitle;
    document.getElementById('supportedDesc').innerHTML = lang.supportedDesc;
}