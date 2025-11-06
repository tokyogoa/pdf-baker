import { initializeLanguageSwitcher } from './shared/language.js';
 
// Language data for Privacy Policy page
const privacyLanguages = {
    en: {
        backLink: '← Back to PDF Baker',
        pageTitle: 'Privacy Policy',
        lastUpdated: 'Last Updated: October 30, 2025',
        description: 'PDF Baker is committed to protecting your privacy. This policy explains our approach to data handling and privacy protection.',
        mainPromise: 'YOUR FILES NEVER LEAVE YOUR DEVICE. ALL PROCESSING IS DONE LOCALLY IN YOUR BROWSER.',
        dataCollectionTitle: 'Data Collection',
        noDataTitle: 'No Personal Data Collection',
        noDataDesc: 'PDF Baker does not collect, store, or transmit any personal information. We do not require registration, email addresses, or any form of identification.',
        noFileTitle: 'No File Storage',
        noFileDesc: 'Your images and generated PDF files are processed entirely within your browser. No files are uploaded to our servers or stored anywhere outside your device.',
        noTrackingTitle: 'No Tracking',
        noTrackingDesc: 'We do not use cookies, analytics, tracking pixels, or any other monitoring technologies. Your usage patterns and behavior are completely private.',
        howWorksTitle: 'How It Works',
        localProcessing: 'PDF Baker uses client-side JavaScript and the jsPDF library to convert images to PDF format. All processing happens locally in your browser using your device\'s computing power.',
        browserSecurity: 'Your browser\'s built-in security features ensure that PDF Baker cannot access files outside of those you explicitly select for conversion.',
        thirdPartyTitle: 'Third-Party Services',
        cdnUsage: 'We use Content Delivery Networks (CDNs) to load the jsPDF library. These services may log basic connection information (IP address, user agent) but this data is not accessible to or controlled by PDF Baker.',
        dataSecurityTitle: 'Data Security',
        securityMeasures: 'Since no data leaves your device, the security of your files depends on your device\'s security. We recommend keeping your browser updated and using devices with appropriate security measures.',
        changesTitle: 'Changes to This Policy',
        changesDesc: 'Any changes to this privacy policy will be posted on this page. Given our zero-data-collection approach, policy changes are unlikely but will be communicated if they occur.',
        contactTitle: 'Contact',
        contactDesc: 'If you have questions about this privacy policy, you can find our contact information on the About page.'
    },
    ja: {
        backLink: '← PDF Bakerに戻る',
        pageTitle: 'プライバシーポリシー',
        lastUpdated: '最終更新：2025年10月30日',
        description: 'PDF Bakerはあなたのプライバシーを保護することに取り組んでいます。このポリシーは、データ処理とプライバシー保護に対する私たちのアプローチを説明します。',
        mainPromise: 'あなたのファイルは決してデバイスを離れません。すべての処理はブラウザ内でローカルに行われます。',
        dataCollectionTitle: 'データ収集',
        noDataTitle: '個人データの収集なし',
        noDataDesc: 'PDF Bakerは個人情報を収集、保存、または送信しません。登録、メールアドレス、またはいかなる形の身元確認も必要ありません。',
        noFileTitle: 'ファイルの保存なし',
        noFileDesc: 'あなたの画像と生成されたPDFファイルは完全にブラウザ内で処理されます。ファイルは私たちのサーバーにアップロードされたり、デバイス外の場所に保存されることはありません。',
        noTrackingTitle: '追跡なし',
        noTrackingDesc: 'クッキー、分析、追跡ピクセル、またはその他の監視技術は使用しません。あなたの使用パターンと行動は完全にプライベートです。',
        howWorksTitle: '動作原理',
        localProcessing: 'PDF BakerはクライアントサイドのJavaScriptとjsPDFライブラリを使用して画像をPDF形式に変換します。すべての処理はあなたのデバイスの計算能力を使用してブラウザ内でローカルに行われます。',
        browserSecurity: 'ブラウザの組み込みセキュリティ機能により、PDF Bakerは変換のために明示的に選択したファイル以外のファイルにアクセスできません。',
        thirdPartyTitle: 'サードパーティサービス',
        cdnUsage: 'jsPDFライブラリを読み込むためにコンテンツ配信ネットワーク（CDN）を使用します。これらのサービスは基本的な接続情報（IPアドレス、ユーザーエージェント）をログに記録する場合がありますが、このデータはPDF Bakerがアクセスまたは制御することはできません。',
        dataSecurityTitle: 'データセキュリティ',
        securityMeasures: 'データがデバイスを離れることがないため、ファイルのセキュリティはデバイスのセキュリティに依存します。ブラウザを最新の状態に保ち、適切なセキュリティ対策を講じたデバイスを使用することをお勧めします。',
        changesTitle: 'このポリシーの変更',
        changesDesc: 'このプライバシーポリシーへの変更はこのページに投稿されます。ゼロデータ収集アプローチのため、ポリシーの変更は起こりにくいですが、発生した場合は通知されます。',
        contactTitle: 'お問い合わせ',
        contactDesc: 'このプライバシーポリシーに関するご質問がございましたら、Aboutページで連絡先情報をご確認ください。'
    },
    zh: {
        backLink: '← 返回PDF Baker',
        pageTitle: '隐私政策',
        lastUpdated: '最后更新：2024年10月28日',
        description: 'PDF Baker致力于保护您的隐私。本政策解释了我们在数据处理和隐私保护方面的方法。',
        mainPromise: '您的文件永远不会离开您的设备。所有处理都在您的浏览器中本地完成。',
        dataCollectionTitle: '数据收集',
        noDataTitle: '不收集个人数据',
        noDataDesc: 'PDF Baker不收集、存储或传输任何个人信息。我们不需要注册、电子邮件地址或任何形式的身份识别。',
        noFileTitle: '不存储文件',
        noFileDesc: '您的图片和生成的PDF文件完全在您的浏览器中处理。没有文件上传到我们的服务器或存储在您设备外的任何地方。',
        noTrackingTitle: '无跟踪',
        noTrackingDesc: '我们不使用Cookie、分析、跟踪像素或任何其他监控技术。您的使用模式和行为完全私密。',
        howWorksTitle: '工作原理',
        localProcessing: 'PDF Baker使用客户端JavaScript和jsPDF库将图片转换为PDF格式。所有处理都使用您设备的计算能力在浏览器中本地进行。',
        browserSecurity: '您浏览器的内置安全功能确保PDF Baker无法访问您明确选择进行转换的文件之外的文件。',
        thirdPartyTitle: '第三方服务',
        cdnUsage: '我们使用内容分发网络（CDN）来加载jsPDF库。这些服务可能会记录基本连接信息（IP地址、用户代理），但PDF Baker无法访问或控制这些数据。',
        dataSecurityTitle: '数据安全',
        securityMeasures: '由于没有数据离开您的设备，文件的安全性取决于您设备的安全性。我们建议保持浏览器更新并使用具有适当安全措施的设备。',
        changesTitle: '本政策的更改',
        changesDesc: '对本隐私政策的任何更改都将发布在此页面上。鉴于我们的零数据收集方法，政策更改不太可能发生，但如果发生将进行通知。',
        contactTitle: '联系方式',
        contactDesc: '如果您对本隐私政策有疑问，可以在关于页面找到我们的联系信息。'
    },
    ko: {
        backLink: '← PDF Baker로 돌아가기',
        pageTitle: '개인정보 처리방침',
        lastUpdated: '최종 업데이트: 2024년 10월 28일',
        description: 'PDF Baker는 귀하의 개인정보 보호에 전념하고 있습니다. 이 정책은 데이터 처리 및 개인정보 보호에 대한 우리의 접근 방식을 설명합니다.',
        mainPromise: '귀하의 파일은 절대 기기를 떠나지 않습니다. 모든 처리는 브라우저에서 로컬로 수행됩니다.',
        dataCollectionTitle: '데이터 수집',
        noDataTitle: '개인 데이터 수집 없음',
        noDataDesc: 'PDF Baker는 개인 정보를 수집, 저장 또는 전송하지 않습니다. 등록, 이메일 주소 또는 어떤 형태의 신원 확인도 필요하지 않습니다.',
        noFileTitle: '파일 저장 없음',
        noFileDesc: '귀하의 이미지와 생성된 PDF 파일은 완전히 브라우저 내에서 처리됩니다. 파일은 우리 서버에 업로드되거나 기기 외부의 어느 곳에도 저장되지 않습니다.',
        noTrackingTitle: '추적 없음',
        noTrackingDesc: '쿠키, 분석, 추적 픽셀 또는 기타 모니터링 기술을 사용하지 않습니다. 귀하의 사용 패턴과 행동은 완전히 비공개입니다.',
        howWorksTitle: '작동 원리',
        localProcessing: 'PDF Baker는 클라이언트 사이드 JavaScript와 jsPDF 라이브러리를 사용하여 이미지를 PDF 형식으로 변환합니다. 모든 처리는 귀하의 기기의 컴퓨팅 성능을 사용하여 브라우저에서 로컬로 수행됩니다.',
        browserSecurity: '브라우저의 내장 보안 기능은 PDF Baker가 변환을 위해 명시적으로 선택한 파일 외의 파일에 액세스할 수 없도록 보장합니다.',
        thirdPartyTitle: '제3자 서비스',
        cdnUsage: 'jsPDF 라이브러리를 로드하기 위해 콘텐츠 전송 네트워크(CDN)를 사용합니다. 이러한 서비스는 기본 연결 정보(IP 주소, 사용자 에이전트)를 기록할 수 있지만 이 데이터는 PDF Baker가 액세스하거나 제어할 수 없습니다.',
        dataSecurityTitle: '데이터 보안',
        securityMeasures: '데이터가 기기를 떠나지 않기 때문에 파일의 보안은 기기의 보안에 달려 있습니다. 브라우저를 최신 상태로 유지하고 적절한 보안 조치가 있는 기기를 사용할 것을 권장합니다.',
        changesTitle: '이 정책의 변경',
        changesDesc: '이 개인정보 처리방침에 대한 변경 사항은 이 페이지에 게시됩니다. 제로 데이터 수집 접근 방식을 고려할 때 정책 변경은 일어날 가능성이 낮지만 발생하면 알려드리겠습니다.',
        contactTitle: '연락처',
        contactDesc: '이 개인정보 처리방침에 대해 질문이 있으시면 소개 페이지에서 연락처 정보를 찾을 수 있습니다.'
    }
};

function updateLanguage(language) {
    const lang = privacyLanguages[language];

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Update all text content
    document.getElementById('backLink').textContent = lang.backLink;
    document.getElementById('pageTitle').textContent = lang.pageTitle;
    document.getElementById('lastUpdated').textContent = lang.lastUpdated;
    document.getElementById('description').textContent = lang.description;
    document.getElementById('mainPromise').textContent = lang.mainPromise;
    document.getElementById('dataCollectionTitle').textContent = lang.dataCollectionTitle;
    document.getElementById('noDataTitle').textContent = lang.noDataTitle;
    document.getElementById('noDataDesc').textContent = lang.noDataDesc;
    document.getElementById('noFileTitle').textContent = lang.noFileTitle;
    document.getElementById('noFileDesc').textContent = lang.noFileDesc;
    document.getElementById('noTrackingTitle').textContent = lang.noTrackingTitle;
    document.getElementById('noTrackingDesc').textContent = lang.noTrackingDesc;
    document.getElementById('howWorksTitle').textContent = lang.howWorksTitle;
    document.getElementById('localProcessing').textContent = lang.localProcessing;
    document.getElementById('browserSecurity').textContent = lang.browserSecurity;
    document.getElementById('thirdPartyTitle').textContent = lang.thirdPartyTitle;
    document.getElementById('cdnUsage').textContent = lang.cdnUsage;
    document.getElementById('dataSecurityTitle').textContent = lang.dataSecurityTitle;
    document.getElementById('securityMeasures').textContent = lang.securityMeasures;
    document.getElementById('changesTitle').textContent = lang.changesTitle;
    document.getElementById('changesDesc').textContent = lang.changesDesc;
    document.getElementById('contactTitle').textContent = lang.contactTitle;
    document.getElementById('contactDesc').textContent = lang.contactDesc;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher(updateLanguage);
});