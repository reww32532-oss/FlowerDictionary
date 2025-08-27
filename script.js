document.addEventListener('DOMContentLoaded', () => {
    const flowerNameInput = document.getElementById('flower-name-input');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result');
    const flowerGallery = document.getElementById('flower-gallery');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfoSpan = document.getElementById('page-info');

    const flowerMeanings = {
        "도라지꽃": "영원한 사랑",
        "보리사초": "일치단결",
        "레가토장미": "매력, 열정",
        "아스클레피어스": "화려한 추억",
        "신지매": "진중, 신중",
        "아가판서스": "사랑의 방문, 사랑의 편지",
        "아로니아나무": "불로장생, 영원한 사랑",
        "황금사철나무": "불변",
        "헬레보루스": "나의 불안을 진정시켜줘요",
        "올라야(=레이스플라워)": "우아한 몸짓, 사랑의 소식",
        "라이스플라워": "통통 튀는 귀여움, 풍요로운 결실",
        "안나카레리나장미": "행복한 사랑",
        "그레이스캘리장미": "순결, 새로운시작",
        "벚꽃나무": "아름다운 정신, 정신적 사랑",
        "와일드모스장미": "사랑의 맹세",
        "옥스포드": "이루어질 수 없는 사랑",
        "핑크아미장미": "열망, 겸손",
        "화이트부부젤라": "행복한 사랑",
        "클라란스": "첫사랑의 고백",
        "캐롤라인 장미": "영원한 사랑",
        "캄파눌라": "감사, 불변, 따듯한 사랑",
        "명자란": "고귀한 봉사",
        "조팝나무": "노력, 노련하다.",
        "실아카시아": "비밀스러운 사랑",
        "스위트(스윗) 핑크": "맹세",
        "카푸치노 장미": "시기, 질투",
        "마트리카(마트리카리아)": "역경에 굴하지 않는 강인함",
        "제제벨 장미": "끝없는 사랑",
        "쥬빌리아(주빌리아) 장미": "순수한 당신",
        "굿무드 장미": "사랑의 맹세",
        "더블라떼": "한자리에 모인 기쁨",
        "파블로 유칼립투스": "추억",
        "하노이 라넌큘러스": "매력, 매혹",
        "에티오피아 장미": "완전한 행복",
        "부르니아": "사랑의 방문",
        "바베 장미": "사랑의 성공, 완벽한 성취",
        "유니폴라": "단결, 일치, 협동",
        "오번가장미": "영원한 사랑",
        "시레네": "청춘의 사랑",
        "로즈마리": "좋은추억, 아름다운 추억",
        "냉이초": "당신께 나의 모든 것을 드립니다",
        "향등골": "망설임, 주저",
        "계란꽃(개망초)": "화해, 가까이 있는 사람을 행복하게 해주고 멀리 있는 사람은 가까이 다가오게 해준다",
        "로미오 장미": "설렘",
        "퀵샌드장미": "수줍음, 첫사랑의 고백",
        "쿨드한장미": "열정, 기쁨, 아름다움",
        "그레이스켈리장미": "청초한 아름다움",
        "실바핑크 장미": "사랑의 축복, 사랑의 맹세",
        "베로니카": "충실, 견고, 정조",
        "줄호엽(호엽란)": "열정, 순수한 사랑",
        "율두스 장미": "상큼한 향기, 영원한 사랑",
        "레인댄스 장미": "영원한 사랑, 우정, 완벽한 성취",
        "블루칩": "영원한 사랑, 우정, 완벽한 성취",
        "파스타거베라": "신비로움",
        "리젠트파크": "행복, 믿음, 사랑의맹세",
        "미니장미": "끝없는 사랑",
        "데스티니 장미": "운명, 운명적인 사랑, 순결, 순진",
        "아이두 장미": "매혹적인 매력",
        "오렌지크러쉬": "첫사랑의 고백",
        "헤라장미": "사랑의 맹세, 행복한 사랑",
        "슈가밤장미": "행복한 사랑, 믿음",
        "핑크미니 장미": "맹세, 단순, 행복한사랑",
        "후록스(플록스, 프록스)": "정열의 사랑, 불타는 내 정열을 그대에게",
        "선홍색 다알리아": "당신의 마음을 알게 되어 기쁩니다",
        "빨간색 다알리아": "당신 때문에 행복해요",
        "흰색 다알리아": "당신의 친절에 감사해요",
        "망고튤립": "수줍음, 부끄러움",
        "용담초": "정의, 슬픈 그대가 좋아, 그대가 힘들 때도 나는 사랑합니다",
        "빅토리아시크릿 장미": "순수한 사랑",
        "프리덤 장미": "불타는 사랑",
        "스위트니스": "로맨틱한 사랑",
        "제스트장미": "영원한 사랑, 우정, 완벽한 성취",
        "올포러브 장미": "행복한 사랑, 사랑의 맹세, 사랑을 위해 모든 걸 드릴께요",
        "페니쿰": "애수, 마음을 서글프게 하는 슬픈 시름",
        "레몬트리": "진심으로 사모합니다, 열의, 성실한 사랑, 정절",
        "부바르디아(부발디아)": "정열, 난 당신의 포로가 되었어요",
        "부부젤라 장미": "행복한 사랑",
        "페어플로우 장미": "행복한 사랑, 끝없는 사랑",
        "옥시(옥시페탈룸, 블루스타)": "날카로움, 행복한 사랑, 서로를 믿는 마음",
        "아스틸베": "기약없는 사랑, 조건없는 사랑",
        "아이스퀸 튤립": "순결, 청초함",
        "러스커스(루스커스)": "변치않는 소중함",
        "유칼립투스": "추억, 시간을 아름답게 덮는다",
        "왁스플라워": "변덕쟁이",
        "하젤 장미": "진지한 감사, 사랑의맹세, 매력적이네요",
        "화이트장미": "존경, 순결, 순진, 매력",
        "카바레장미": "수줍음, 첫사랑의 고백",
        "소국": "진실, 성실, 감사, 내 마음은 진심입니다.",
        "슈퍼센세이션 미니 장미": "행복한 사랑, 내 곁에 있어줘요",
        "들장미": "고독, 소박한 아름다움",
        "파란장미": "동경하는 사랑",
        "분홍장미": "맹세, 단순, 행복한사랑",
        "하얀장미": "존경, 순결, 순진, 매력",
        "노란장미": "영원한 사랑, 우정, 완벽한 성취",
        "오렌지장미": "첫사랑의 고백, 수줍음",
        "빨간장미": "열정, 기쁨, 아름다움",
        "어썸파티": "첫사랑의 고백",
        "쉬라즈(Shiraz) 장미": "낭만적인 사랑",
        "라벤더(Lavendar)": "기대",
        "장미7송이": "당신은 내인생의 행운입니다.",
        "카라 5송이": "아무리봐도 당신만한 사람은 없습니다.",
        "작약": "수줍음",
        "노단새(로단테, 로단새, 종이꽃)": "아름다움, 행복",
        "스타티스": "영원한 사랑, 변치 않는 사랑",
        "보라 장미": "영원한 사랑",
        "천일홍": "변치않는 사랑, 매혹",
        "목화": "어머니의 사랑",
        "가넷잼장미": "불타는사랑",
        "맨스필드파크장미": "사랑의맹세",
        "캄파넬라장미": "당신을위한축복",
        "설유화": "애교, 명쾌한 승리",
        "라넌큘러스": "매력, 매혹",
        "포코로코장미": "수줍은신부",
        "델피늄": "당신을 행복하게 해줄께요",
        "버블검장미": "불타는사랑",
        "도미니카장미": "열정적사랑",
        "빅토리아장미": "행복한사랑",
        "화이트 퐁퐁국화": "진심, 성실",
        "다빈치장미": "영원한 사랑, 존경",
        "솔레어장미": "질투",
        "노란 퐁퐁국화": "진심, 성실",
        "기젤라장미": "사랑의축복",
        "리시안셔스": "변치않는사랑",
        "샤먼트장미": "따뜻한마음",
        "부르트장미": "사랑의맹세",
        "소프라노장미": "첫사랑의고백, 수줍음",
        "프리지아(후리지아)": "순결, 천진난만, 새출발, 응원",
        "안개꽃": "맑은 마음, 깨끗한 마음, 사랑의 성공",
        "카타리나 장미(Rose)": "영원한 사랑, 우정",
        "자나장미(Rose)": "끝없는 사랑",
        "히야신스(Hyacinth)": "유희, 겸손한 사랑",
        "해바라기(Sun Flower)": "숭배, 기다림",
        "튤립(Tulipa)": "사랑의 고백",
        "카라(Calla)": "순수, 천년의 사랑",
        "카네이션(Carnation)": "존경, 감사",
        "장미 두송이": "결혼약속",
        "장미 한송이": "영원한 사랑",
        "분홍(핑크) 장미(Rose)": "사랑스러운 당신",
        "흰색 장미(Rose)": "순수",
        "노란 장미(Rose)": "기쁨, 완벽한 성취",
        "주황(오렌지) 장미(Rose)": "욕망",
        "빨간 장미(Rose)": "당신을 사랑합니다",
        "자스민(Jasmine)": "행운을 빌어요",
        "안시리움(Flaming Flower)": "사랑에 번민하는 마음",
        "아이비(Ivy)": "굳게 맺어진 사랑",
        "아이리스(Iris)": "의미있는 우정",
        "아네모네(Wind Flower)": "진실",
        "스피아민트(Spearmint)": "따뜻한 마음",
        "스토크(Stock)": "언제나 아름다운 당신",
        "수선화(Narcissus)": "편안히 지내세요",
        "수국(Hydrangea)": "이해해주니 고마워요",
        "선인장(Cactus)": "인내",
        "베고니아(Begonia)": "조심스러움",
        "백합(Lilly)": "당신과 함께라면",
        "백일홍(Zinnia)": "애착",
        "바이올렛(Violet)": "정숙함",
        "바베나(Vebena)": "행복",
        "바실(Basil)": "희망",
        "민트(Mint)": "미덕",
        "민들레(Dandelion)": "행복",
        "미모사(Humble Plant)": "예민한 마음",
        "물망초(Forget-Me-Not)": "진실한 사랑",
        "목련(Magnolia)": "고귀함",
        "모란(Peony)": "행복한 결혼",
        "메리골드(Marigold)": "반드시오고야 말 행복",
        "매화(Prunus Mume)": "고갈한 마음",
        "매쉬 메리골드(Mash Marigold)": "반드시 오고야말 행복",
        "매발톱꽃(Columbine)": "승리의 맹세",
        "마가렛(Maguerite)": "마음속에 감춘 사랑",
        "루피너스(Lupinus)": "모정",
        "로즈제라늄(Rose Geranium)": "선택",
        "로즈메리(Rosemary)": "기억",
        "레몬 버베나(Lemon Verbena)": "인내",
        "레몬밤(Lemon Balm)": "위로",
        "레몬(Lemon)": "진심으로 사모함",
        "흰색 라일락(Lilac)": "아름다운 약속",
        "라일락(Lilac)": "아름다움",
        "흰색 동백(Camellia)": "너무나 사랑스러운 당신",
        "빨간 동백(Camellia)": "당신은 내마음의 불꽃",
        "독일 창포(German Iris)": "멋진 결혼",
        "도라지(Ballon-Flower)": "상냥하고 따뜻함",
        "도금양(Myrtle)": "사랑",
        "데이지(Daisy)": "순수",
        "다알리아(Dahlia)": "감사, 정렬, 화려함",
        "노루퀴(Hepatica)": "인내",
        "네프로레피스(Nephrolepis)": "매혹",
        "나팔꽃(Morning-Glory)": "기쁜 소식",
        "금어초(Snapdragon)": "상냥한 숙녀",
        "글라디올러스(Gladiolus)": "진실",
        "흰색 국화": "진실",
        "노란 국화": "섬세한 사랑",
        "빨간 국화": "당신을 사랑합니다",
        "과꽃(China Aster)": "믿음직한 사랑",
        "거베라(Gerbera)": "순수",
        "개나리(Forsythia)": "기대",
        "국화(Chrysanthemum)": "정말 좋은 친구",
        "라벤더(Lavender)": "행복"
    };

    let currentPage = 1;
    const itemsPerPage = 12;
    const flowerNames = Object.keys(flowerMeanings);
    const totalPages = Math.ceil(flowerNames.length / itemsPerPage);

    function performSearch() {
        const flowerName = flowerNameInput.value.trim();
        if (flowerName) {
            const meaning = flowerMeanings[flowerName];
            if (meaning) {
                resultContainer.innerHTML = `<p>${meaning}</p>`;
            } else {
                resultContainer.innerHTML = `<p>꽃말을 찾을 수 없습니다.</p>`;
            }
        } else {
            resultContainer.innerHTML = `<p>꽃 이름을 입력해주세요.</p>`;
        }
    }

    function displayGallery() {
        flowerGallery.innerHTML = ''; // Clear current gallery items
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const flowersToDisplay = flowerNames.slice(startIndex, endIndex);

        flowersToDisplay.forEach(flower => {
            const meaning = flowerMeanings[flower];
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `<h3>${flower}</h3><p>${meaning}</p>`;
            flowerGallery.appendChild(galleryItem);
        });

        pageInfoSpan.textContent = `${currentPage} / ${totalPages} 페이지`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    searchButton.addEventListener('click', performSearch);

    flowerNameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayGallery();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayGallery();
        }
    });

    displayGallery();
});
