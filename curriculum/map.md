# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 수준·목표·현장에 맞춰 조사하고 만든다.

- 기본 순서는 F → P1~P6 → L → P7 → Q → M → S → D → X다(P7은 L4를 선수로 둔다). 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다. 식품 업종 학습자에게는 S6을, 안전 사고가 급한 현장에는 S1~S2를 앞당겨도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」는 그 모듈의 뼈대가 되는 국내 법령·고시·KS다. 「글로벌 비교」는 비교 축이다. 법령·표준 명칭은 「」로 쓰고 아래 출처 표에 공식 URL과 조회일을 둔다. 지도에는 조문 번호를 쓰지 않는다. 조문·기준값·적용 시기는 세션에서 튜터가 공식 출처로 확인한다([tutor/sources.md](../tutor/sources.md)).
- 「경계·연결」은 다른 go-* 워크스페이스가 깊게 다루는 주제다. 여기서는 현장 운영 판단에 필요한 만큼만 다룬다.
- S 영역은 안전·환경·식품 안전 기준을 생산 운영(표준작업·보전·공정 변경·경영시스템 운영)에 녹이는 부분이다. 안전·환경 법의 의무 체계는 go-hse가 깊게 다룬다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식·선수 관계·출처 표를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## F · 운영의 뼈대

### F1 · 운영이라는 변환 시스템
- 선수: 없음
- 핵심 질문: 우리 현장은 무엇을 받아 무엇으로 바꾸며, 고객은 그중 무엇으로 우리를 고르는가?
- 목표: Explain — 자기 현장의 투입·변환·산출과 운영 성과 목표(품질·속도·신뢰성·유연성·원가) 사이의 맞교환을 설명한다.
- 만들어 볼 것: 우리 공장의 변환 과정 지도와 성과 목표 우선순위 한 장
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Hill의 주문 획득·자격 요인, 운영 전략의 성과 목표 구분

### F2 · 공정 유형과 배치
- 선수: F1
- 핵심 질문: 같은 제품도 왜 어떤 공장은 라인으로, 어떤 공장은 작업장별로 만드는가?
- 목표: Evaluate — 물량·품종에 맞는 공정 유형과 배치를 비교해 고른다.
- 만들어 볼 것: 우리 제품군을 제품-공정 매트릭스에 놓고 배치 변경안 비교
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Hayes·Wheelwright의 제품-공정 매트릭스

### F3 · 용량·병목·흐름
- 선수: F1
- 핵심 질문: 설비를 다 돌리는데 왜 납기는 늦고 재공품은 쌓이는가?
- 목표: Apply — 리틀의 법칙과 가동률·변동성으로 병목과 리드타임을 진단한다.
- 만들어 볼 것: 우리 라인 공정별 용량 표와 병목·리드타임 계산
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Little(1961)의 대기 공식, Factory Physics의 변동성 법칙

### F4 · 공정 분석과 작업 측정
- 선수: F3
- 핵심 질문: 표준시간은 어떻게 정하고, 라인의 일은 어떻게 나눠야 고르게 흐르는가?
- 목표: Apply — 공정 분석·시간 측정으로 표준시간을 정하고 라인을 밸런싱한다.
- 만들어 볼 것: 한 공정의 작업 분석표와 택트 타임 기준 라인 밸런싱안
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: ILO 작업 연구(Work Study)

## P · 계획·스케줄링

### P1 · 총괄생산계획
- 선수: F3
- 핵심 질문: 정해진 판매 계획을 우리 공장의 인력·설비·재고로 어떻게 소화하는가?
- 목표: Evaluate — 추종·평준·혼합 전략의 비용과 위험을 비교해 고른다.
- 만들어 볼 것: 우리 공장 다음 분기 총괄생산계획 두 안의 비교표
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음(연장근로 한도 같은 인력 제약은 go-hr에서 확인)
- 글로벌 비교: ASCM CPIM의 계획 체계
- 경계·연결: 수요예측·S&OP는 go-scm. 여기서는 정해진 수량을 공장 용량으로 바꾸는 데서 시작한다.

### P2 · 기준생산계획(MPS)과 납기 약속
- 선수: P1
- 핵심 질문: 영업이 묻는 「언제 줄 수 있어요?」에 무엇을 보고 답하는가?
- 목표: Apply — MPS를 세우고 가용약속량(ATP)으로 납기를 약속한다.
- 만들어 볼 것: 주력 제품 8주 MPS와 ATP 표
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: ASCM CPIM의 기준생산계획

### P3 · BOM과 자재소요계획(MRP)
- 선수: P2
- 핵심 질문: 완제품 계획에서 부품 발주 시점은 어떻게 거꾸로 계산되는가?
- 목표: Apply — BOM 전개와 리드타임 차감으로 MRP 표를 계산하고 예외를 읽는다.
- 만들어 볼 것: 우리 제품 하나의 다단계 BOM과 MRP 표
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Orlicky의 MRP, ASCM CPIM
- 경계·연결: 발주·공급사 관리와 재고 정책은 go-scm.

### P4 · 용량 계획(RCCP·CRP)
- 선수: P3
- 핵심 질문: 계획은 맞는데 현장이 못 따라가는지 어떻게 미리 아는가?
- 목표: Apply — 개략·상세 용량 계획으로 과부하를 찾고 조정안을 낸다.
- 만들어 볼 것: 다음 4주 작업장별 부하-용량 표와 조정안
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: ASCM CPIM의 용량 관리

### P5 · 현장 스케줄링
- 선수: F3
- 핵심 질문: 오늘 들어온 작업을 어떤 순서로 돌려야 납기와 셋업을 함께 지키는가?
- 목표: Apply — 우선순위 규칙과 간트 차트로 작업 순서를 정하고 결과를 비교한다.
- 만들어 볼 것: 우리 현장 하루치 작업의 규칙별 스케줄 비교
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 단일·흐름 작업장 스케줄링의 우선순위 규칙(SPT·EDD 등)

### P6 · 제약이론과 DBR
- 선수: P5
- 핵심 질문: 병목 하나가 공장 전체의 산출을 정한다면 나머지 공정은 무엇에 맞춰야 하는가?
- 목표: Evaluate — 제약의 5단계와 DBR로 투입 통제 방식을 판단한다.
- 만들어 볼 것: 우리 라인의 제약 식별과 DBR 투입 규칙
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Goldratt의 제약이론

### P7 · 계획 방식의 선택
- 선수: P4, P6, L4
- 핵심 질문: MRP·칸반·DBR 가운데 우리 현장에는 무엇이 맞고 어떻게 섞는가?
- 목표: Evaluate — 제품·변동성·공정 구조를 근거로 계획·통제 방식을 정한다.
- 만들어 볼 것: 우리 공장 생산계획 운영 규칙서 초안
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: ASCM CPIM, 도요타 생산 방식, 제약이론의 비교
- 경계·연결: ERP·MES 선정과 도입은 go-mis.

## L · 린·TPS

### L1 · TPS의 두 기둥과 낭비
- 선수: F3
- 핵심 질문: 도요타는 무엇을 낭비라 부르고, 왜 문제가 생기면 라인을 세우는가?
- 목표: Explain — JIT와 지도카(自働化), 7가지 낭비를 자기 현장의 예로 설명한다.
- 만들어 볼 것: 우리 현장의 낭비 관찰 기록(현장 한 바퀴)
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 도요타 공식 TPS 설명, Lean Enterprise Institute

### L2 · 가치흐름 지도
- 선수: L1, F4
- 핵심 질문: 주문부터 출하까지 실제로 가치를 더하는 시간은 얼마인가?
- 목표: Apply — 현재 상태 가치흐름 지도를 그리고 미래 상태를 제안한다.
- 만들어 볼 것: 주력 제품의 현재·미래 가치흐름 지도
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Lean Enterprise Institute의 가치흐름 지도

### L3 · 5S·표준작업·시각 관리
- 선수: L1
- 핵심 질문: 정리정돈은 왜 청소가 아니라 이상을 드러내는 장치인가?
- 목표: Apply — 한 작업장에 5S와 표준작업, 시각 관리를 설계하고, 표준작업을 작업자에게 가르치는 방법(TWI 작업지도)을 정한다.
- 만들어 볼 것: 한 작업장의 5S 점검표, 표준작업표, 작업지도(TWI) 계획
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음(작업장 정리·통로 확보 같은 안전 기준은 S1에서)
- 글로벌 비교: 도요타 공식 TPS 설명의 표준작업

### L4 · 풀 시스템·칸반·평준화
- 선수: L1, P1
- 핵심 질문: 계획대로 밀어내는 대신 쓴 만큼만 당겨 오면 무엇이 달라지는가?
- 목표: Apply — 칸반 수를 계산하고 평준화(헤이준카) 일정을 만든다.
- 만들어 볼 것: 한 부품의 칸반 루프 설계와 칸반 수 계산
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 도요타 공식 TPS 설명의 JIT·칸반

### L5 · 셋업 단축(SMED)
- 선수: L1
- 핵심 질문: 품종 교체 시간을 줄이면 왜 재고와 리드타임이 함께 줄어드는가?
- 목표: Apply — 셋업을 내부·외부 작업으로 나누고 단축안을 만든다.
- 만들어 볼 것: 우리 설비 한 대의 셋업 분석표와 단축안
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 신고 시게오의 SMED

### L6 · 카이젠과 문제 해결
- 선수: L1
- 핵심 질문: 같은 문제가 왜 반복되고, 원인을 어디까지 파야 다시 안 나는가?
- 목표: Apply — PDCA·5Why·A3로 현장 문제를 정의하고 대책을 검증한다.
- 만들어 볼 것: 최근 현장 문제 하나의 A3 보고서
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Lean Enterprise Institute의 A3, 도요타 공식 TPS 설명의 카이젠

## Q · 품질경영

### Q1 · 품질의 정의와 품질비용
- 선수: F1
- 핵심 질문: 불량 한 개의 진짜 비용은 얼마이고, 어디에 돈을 써야 줄어드는가?
- 목표: Explain — 적합 품질과 설계 품질, 예방·평가·실패 비용의 관계를 설명한다.
- 만들어 볼 것: 우리 공장 품질비용 추정표
- 국내 근거: 「KS Q ISO 9000」
- 글로벌 비교: 「ISO 9000」의 품질 용어, 품질비용(PAF) 모형
- 경계·연결: 원가 계산과 원가 차이 분석은 go-accounting.

### Q2 · QC 7가지 도구와 현장 데이터
- 선수: Q1
- 핵심 질문: 불량 원인을 감이 아니라 데이터로 좁히려면 무엇을 어떻게 모으는가?
- 목표: Apply — 체크시트·파레토·특성요인도·히스토그램·산점도로 원인을 좁힌다.
- 만들어 볼 것: 우리 불량 데이터의 파레토도와 특성요인도
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 이시카와의 QC 7가지 도구

### Q3 · 관리도와 공정능력
- 선수: Q2
- 핵심 질문: 이번 불량은 공정이 바뀐 신호인가, 원래 있던 흔들림인가?
- 목표: Apply — 측정값을 믿을 수 있는지(측정시스템 분석) 먼저 확인하고, 관리도로 이상 원인을 판단하고 공정능력 지수를 계산·해석한다.
- 만들어 볼 것: 우리 공정 한 특성의 측정시스템 분석(Gage R&R) 결과, 관리도와 Cp·Cpk 해석
- 국내 근거: 「KS Q ISO 7870-2」, 「KS Q ISO 22514-2」
- 글로벌 비교: 「ISO 7870-2」, 「ISO 22514-2」
- 경계·연결: 통계 추론·실험 설계 심화는 go-data-analytics.

### Q4 · 샘플링 검사와 수입·출하 검사
- 선수: Q2
- 핵심 질문: 전수검사를 하지 않고도 로트를 받아들일지 어떻게 정하는가?
- 목표: Apply — AQL 기반 샘플링 계획을 읽고 검사 기준서를 만든다.
- 만들어 볼 것: 주요 원자재 하나의 수입검사 기준서
- 국내 근거: 「KS Q ISO 2859-1」
- 글로벌 비교: 「ISO 2859-1」
- 경계·연결: 공급사 선정·평가는 go-scm.

### Q5 · 6시그마 DMAIC
- 선수: Q3, L6
- 핵심 질문: 산포를 줄이는 개선 프로젝트는 어떤 단계로 증거를 쌓는가?
- 목표: Apply — DMAIC 단계로 개선 과제를 정의하고 측정·분석 계획을 세운다.
- 만들어 볼 것: 우리 공장 개선 과제 하나의 DMAIC 프로젝트 차터
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: 「ISO 13053-1」
- 경계·연결: 프로젝트 일정·자원 관리는 go-project-management.

### Q6 · TQM과 품질경영시스템
- 선수: Q1
- 핵심 질문: 품질을 검사 부서가 아니라 회사 전체의 일로 만드는 체계는 어떻게 생겼는가?
- 목표: Apply — 「ISO 9001」 요구사항의 구조를 자기 회사 프로세스에 대응시키고, 4M(사람·설비·자재·방법) 변경관리와 부적합 처리·시정 조치 흐름을 포함해 빈틈을 찾는다.
- 만들어 볼 것: 우리 회사 문서화된 정보 체계와 프로세스 대응표, 4M 변경관리 규칙(2026판 전환 점검 포함 — 전환 기한은 인증기관 공지로 확인)
- 국내 근거: 「산업표준화법」의 품질경영, 「KS Q ISO 9001」
- 글로벌 비교: 「ISO 9001」, 데밍의 TQM 원칙

### Q7 · 제품 인증과 제조물 책임
- 선수: Q6
- 핵심 질문: 우리 제품이 시장에 나가려면 어떤 인증이 필요하고, 결함이 나면 누가 왜 책임지는가?
- 목표: Evaluate — 자기 제품의 인증 대상 여부와 결함 예방 체계의 빈틈을 판단한다.
- 만들어 볼 것: 우리 제품 인증·표시 점검표와 결함 예방 체크리스트
- 국내 근거: 「산업표준화법」, 「전기용품 및 생활용품 안전관리법」, 「제품안전기본법」, 「제조물 책임법」
- 글로벌 비교: 「EU 제조물책임 지침(2024/2853)」, 「EU 일반제품안전규정(2023/988)」
- 경계·연결: 제조물 책임 소송·계약 판단은 go-compliance-and-legal.

## M · 설비·유지보수

### M1 · OEE와 손실 구조
- 선수: F3
- 핵심 질문: 설비가 켜져 있던 시간 중 실제로 양품을 만든 시간은 얼마인가?
- 목표: Apply — 가동률·성능·품질로 OEE를 계산하고 손실을 분류한다.
- 만들어 볼 것: 우리 설비 한 대의 한 주 OEE와 손실 분해
- 국내 근거: 「KS X ISO 22400-2」
- 글로벌 비교: 「ISO 22400-2」, JIPM의 설비 손실 구분

### M2 · 보전 전략
- 선수: M1
- 핵심 질문: 고장 나면 고칠 설비, 날짜 맞춰 바꿀 부품, 상태를 보고 판단할 곳은 어떻게 가르는가?
- 목표: Evaluate — 사후·예방·예지·신뢰성 중심 보전(RCM)을 설비별로 비교해 정한다.
- 만들어 볼 것: 우리 핵심 설비 보전 전략 배정표
- 국내 근거: 「KS A IEC 60300-3-11」(법정 안전검사 대상 설비는 go-hse S4에서 확인)
- 글로벌 비교: 「IEC 60300-3-11」
- 경계·연결: 설비 투자의 경제성 평가는 go-finance.

### M3 · TPM과 자주보전
- 선수: M1, L3
- 핵심 질문: 운전자가 자기 설비를 돌보게 하면 무엇이 달라지는가?
- 목표: Apply — 자주보전 단계와 점검 기준을 한 설비에 맞춰 설계한다.
- 만들어 볼 것: 설비 한 대의 자주보전 점검표
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: JIPM의 TPM

### M4 · 신뢰성 지표와 FMEA
- 선수: M2
- 핵심 질문: 어떤 고장이 가장 위험하고, 무엇부터 막아야 하는가?
- 목표: Apply — MTBF·MTTR로 설비 신뢰성을 읽고, 설비·공정 FMEA로 고장·불량 모드의 우선순위를 정해 관리계획서에 잇는다.
- 만들어 볼 것: 핵심 설비 하나의 FMEA 표
- 국내 근거: 「KS A IEC 60812」
- 글로벌 비교: 「IEC 60812」

## S · 현장 안전·환경·식품 안전 운영

### S1 · 공정·설비 안전을 운영에 녹이기
- 선수: F1
- 핵심 질문: 표준작업·설비 조정·보전 작업 안에서 사람이 다치는 길은 어디이고, 안전 기준을 그 절차 안에 어떻게 넣는가?
- 목표: Apply — 자기 현장의 설비·작업(끼임·추락·전기·중량물 등)에 걸리는 안전 기준을 찾아 표준작업과 보전 절차에 대조한다.
- 만들어 볼 것: 우리 설비 한 대의 표준작업·보전 절차 안전 기준 대조표(출처 링크 포함)
- 국내 근거: 「산업안전보건기준에 관한 규칙」, 「KOSHA 기술지원규정(KOSHA GUIDE)」
- 글로벌 비교: 「미국 산업안전보건법(OSH Act)」의 OSHA 기준, 「EU 산업안전보건 기본 지침(89/391/EEC)」
- 경계·연결: 「산업안전보건법」의 의무 체계·공정안전관리(PSM)·안전보건교육, 고위험 작업의 잠금·표지 절차 설계는 go-hse(S4). 여기서는 표준작업·보전 절차 안 대조까지.

### S2 · 위험성평가 결과를 공정 개선과 변경관리에 잇기
- 선수: S1, F4
- 핵심 질문: 위험성평가표에 적힌 대책이 왜 현장에서 보호구와 주의 표지로 끝나고, 공정을 바꿀 때는 왜 다시 평가하지 않는가?
- 목표: Apply — 한 공정의 위험성평가 결과를 제거·대체·공학적 대책 순서로 공정·설비 개선안에 옮기고, 공정 변경 때 다시 평가하는 변경관리 규칙을 세운다.
- 만들어 볼 것: 우리 공정 하나의 위험성평가 기반 개선안과 변경관리 규칙
- 국내 근거: 「사업장 위험성평가에 관한 지침」, 「KOSHA 기술지원규정(KOSHA GUIDE)」
- 글로벌 비교: 「ISO 45001」의 위험 평가와 관리 대책 위계
- 경계·연결: 위험성평가 제도·절차와 근로자 참여는 go-hse.

### S3 · 통합 경영시스템 운영
- 선수: Q6, S2
- 핵심 질문: 품질·환경·안전보건·식품안전 인증을 따로 돌리지 않고 하나의 현장 운영 달력으로 묶을 수 있는가?
- 목표: Evaluate — 경영시스템 표준의 공통 상위 구조로 품질·환경·안전보건·식품안전 요구를 한 대응표에 묶고, 자기 현장 운영의 빈틈 우선순위를 정한다.
- 만들어 볼 것: 우리 공장 통합 경영시스템 대응표와 월간 운영 달력
- 국내 근거: 「KS Q ISO 9001」, 「KS I ISO 14001」, 「KS Q ISO 45001」, 「KOSHA-MS」
- 글로벌 비교: 「ISO 9001」, 「ISO 14001」, 「ISO 45001」, 「FSSC 22000」, 영국 HSE의 「HSG65」
- 경계·연결: ISO 45001·14001·50001의 적용 범위 결정과 안전보건관리체계 구축 의무, 「중대재해 처벌 등에 관한 법률」의 의무는 go-hse(M2·C 영역), 사고 뒤 형사 책임은 go-compliance-and-legal. 여기서는 품질·식품안전 중심의 통합 운영 달력까지.

### S4 · 현장 사건 조사와 시정 조치
- 선수: S2, L6
- 핵심 질문: 사고·아차사고·품질 사고에서 사람 탓을 넘어 공정과 체계의 원인을 어떻게 찾는가?
- 목표: Apply — 사건 하나를 조사해 직접·근본 원인을 가르고 시정 조치(8D·CAPA)와 효과 확인 방법을 정한다.
- 만들어 볼 것: 최근 아차사고나 품질 사고 하나의 조사·시정 조치 보고서
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음(법정 산업재해 보고·조사 의무는 go-hse에서 확인)
- 글로벌 비교: 「ISO 45001」의 사건 조사와 시정 조치, 「ISO 9001」의 부적합과 시정 조치
- 경계·연결: 산업재해 보고·조사의 법적 의무와 재해 재발 방지 보고서는 go-hse(S7). 여기서는 품질 사고와 아차사고의 공정 원인·시정 조치까지.

### S5 · 현장 환경 측면 운영
- 선수: F1, Q6
- 핵심 질문: 우리 라인이 쓰는 원료·에너지와 내보내는 폐기물을 생산 운영 지표로 어떻게 줄이는가?
- 목표: Apply — 공정별 환경 측면(원료·에너지·폐기물)을 목록으로 만들고 「ISO 14001」의 운영 관리로 줄이는 계획을 세운다.
- 만들어 볼 것: 우리 라인 환경 측면 목록과 줄이기 계획
- 국내 근거: 「폐기물관리법」(사업장폐기물이 걸리는 조건까지), 「KS I ISO 14001」
- 글로벌 비교: 「ISO 14001」
- 경계·연결: 화학물질 관리·배출시설 인허가·폐기물 처리 의무, 에너지 신고·진단 의무는 go-hse(E 영역), 탄소 회계·온실가스·지속가능성 공시는 go-esg.

### S6 · 식품 안전과 HACCP
- 선수: Q6
- 핵심 질문: 식품 공정에서 위해를 어디서 반드시 잡아야 하고, 그것을 어떻게 증명하고 문제가 난 제품을 어떻게 되찾는가?
- 목표: Apply — 위해요소 분석으로 중요관리점(CCP)을 정하고 한계기준·모니터링·개선 조치, 이력 추적·회수 절차를 설계한다.
- 만들어 볼 것: 우리 제품 하나의 HACCP 계획 초안과 회수·추적 절차
- 국내 근거: 「식품위생법」, 「축산물 위생관리법」, 「식품 및 축산물 안전관리인증기준」, 「식품 등의 표시·광고에 관한 법률」, 「식품 등 이력추적관리기준」, 「위해식품등 회수지침」, 「KS Q ISO 22000」
- 글로벌 비교: 「Codex 식품위생 일반원칙(CXC 1-1969)」, 「ISO 22000」, 「FSSC 22000」, 「미국 식품안전현대화법(FSMA)」
- 경계·연결: 작업장 위생·세척 화학물질 안전·위생교육처럼 위생과 안전보건이 만나는 부분은 go-hse.

## D · 현장 관리와 데이터

### D1 · 현장 KPI 체계
- 선수: M1, Q2
- 핵심 질문: 현장 지표가 많은데 왜 아무도 그 숫자로 행동을 바꾸지 않는가?
- 목표: Apply — 운영 성과 목표에서 현장 KPI를 내려 정의·산식·주기·책임자를 정한다.
- 만들어 볼 것: 우리 공장 현장 KPI 정의서
- 국내 근거: 「KS X ISO 22400-2」
- 글로벌 비교: 「ISO 22400-2」
- 경계·연결: 전사 성과관리·BSC·예산은 go-control.

### D2 · 일일 현장 관리
- 선수: D1, L6
- 핵심 질문: 어제의 문제를 오늘 아침에 누가 보고, 어디까지 올라가야 풀리는가?
- 목표: Apply — 현장 회의·게시판·에스컬레이션 규칙으로 일일 관리 체계를 설계한다.
- 만들어 볼 것: 우리 현장 일일 회의 운영안과 에스컬레이션 규칙
- 국내 근거: 실무 기준 — 국내 법령 직접 근거 없음
- 글로벌 비교: Lean Enterprise Institute의 현장 관리(겜바)

### D3 · MES·현장 데이터와 스마트공장
- 선수: D1, P4
- 핵심 질문: 계획(ERP)과 현장(설비) 사이에서 데이터는 어떻게 흘러야 하는가?
- 목표: Evaluate — 현장 데이터 흐름을 그리고 스마트공장 도입 범위와 순서를 판단한다.
- 만들어 볼 것: 우리 공장 데이터 흐름도와 스마트공장 단계 도입안
- 국내 근거: 「중소기업 스마트제조혁신 촉진에 관한 법률」, 「스마트공장 수준확인 사업」, 「KS X IEC 62264-1」
- 글로벌 비교: 「IEC 62264-1」(ISA-95)
- 경계·연결: 시스템 선정·도입·IT 운영은 go-mis, 데이터 분석 기법은 go-data-analytics.

## X · 졸업 프로젝트

### X1 · 우리 현장 운영 개선 패키지
- 선수: F3, Q6
- 핵심 질문: 배운 것을 내 현장의 실제 문제에 끝까지 써서 내일 쓸 문서로 만들 수 있는가?
- 목표: Develop — 학습자가 고른 현장 문제에 대해 진단·개선안·운영 규칙·준수 점검을 묶은 실제 업무 산출물을 만든다.
- 만들어 볼 것: 학습자가 고른 하나. 괄호 안 모듈을 마친 뒤 시작한다. 라인 OEE 개선 계획서(M1, M2), 생산계획 운영 규칙서(P7), 가치흐름 개선안(L2), 품질매뉴얼과 프로세스 대응표(Q6), HACCP 계획서(S6), 위험성평가 기반 공정 개선안(S2), 통합 경영시스템 대응표(S3)
- 국내 근거: 학습자가 고른 주제의 국내 법령·고시·KS
- 글로벌 비교: 학습자가 고른 주제의 국제 표준

## 겹침 경계

| 주제 | 이 리포에서 | 깊게는 |
|---|---|---|
| 수요예측·S&OP·재고 정책·구매·물류 | MPS에 들어오는 수요와 자재 가용성의 입력까지 | go-scm |
| 산업안전보건법·중대재해처벌법의 의무 체계, 위험성평가 제도와 근로자 참여, 공정안전관리(PSM), 산업재해 보고·조사 의무, 화학물질 관리, 배출시설 인허가·폐기물 처리 의무, 물류창고 같은 현장의 산업안전, ISO 45001·14001 심화 | 표준작업·보전 절차의 안전 기준 대조, 위험성평가 결과의 공정 개선·변경관리, 통합 경영시스템 운영, 사건 근본원인·시정 조치, 현장 환경 측면 줄이기까지 | go-hse |
| 근로시간·인력 운영, 산업재해 보상 | 인력 제약을 생산계획의 입력으로 쓰는 데까지 | go-hr |
| MRP의 구매 관점 소요 전개·발주·공급사 평가 | 생산 관점 MPS·MRP(생산 오더와 예외 메시지)·용량·스케줄링, 수입검사 기준서까지 | go-scm |
| 사고 뒤 형사 책임·수사·소송 대응, 계약·도급의 법률 판단, 제조물 책임 소송 | 결함 예방 체계, 현장 체계 운영까지 | go-compliance-and-legal |
| 탄소 회계·Scope 1~3·지속가능성 공시·배출권 | 현장 환경 관리까지 | go-esg |
| 표준원가·원가 차이 분석, 재고자산 평가 | 품질비용과 손실의 운영 지표까지 | go-accounting |
| 내부통제·전사 성과관리(BSC·예산) | 현장 KPI 체계까지 | go-control |
| 설비 투자의 경제성 평가 | 보전 전략 비교의 운영 논리까지 | go-finance |
| ERP·MES 선정·도입·IT 운영 | 계획·실행 데이터의 흐름과 현장 사용까지 | go-mis |
| 통계 추론·회귀·실험 설계 심화 | SPC·공정능력·DMAIC에 필요한 통계까지 | go-data-analytics |
| 개선 프로젝트의 일정·WBS·위험 관리 | 언급만 | go-project-management |
| 대규모 리콜 위기 대응·업무연속성(BCP) | 회수 절차와 이력 추적의 현장 운영까지 | go-resilience |
| 고객 불만·VOC 관리 | 불량·부적합의 공정 원인과 시정 조치까지 | go-cx |
| 건물·사무 시설의 보전과 운영 | 생산 설비의 보전까지 | go-general-affairs |

## 이 지도에 넣지 않은 영역

제품 설계·개발(DFM·동시공학 — go-product·go-innovation-rnd), 서비스 운영(대기열 설계·서비스 청사진), 업종별 품질 규격(IATF 16949·의료기기 ISO 13485 등), 건설 현장 안전 특례는 깊게 다루지 않는다. 학습자가 원하면 튜터가 선택 모듈로 더한다. 선택 모듈 id는 `E`로 시작하고 `learner/state.json`에만 둔다.

## 출처

튜터는 학습자에게 말하기 전에 이 표의 공식 출처를 다시 조회한다(tutor/sources.md). 표의 사실은 조회일 기준이다.

| 명칭 | 기관 | URL | 조회일 | 확인한 사실 |
|---|---|---|---|---|
| 「산업표준화법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%82%B0%EC%97%85%ED%91%9C%EC%A4%80%ED%99%94%EB%B2%95 | 2026-11-14 | 현행 법률 제21438호(2026-03-10). KS 제품·서비스 인증 제도와 품질경영(품질경영 및 공산품안전관리법에서 2016년에 옮겨 온 장)을 둔다. 개정분 2027-03-16 시행 예정 |
| 「전기용품 및 생활용품 안전관리법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%A0%84%EA%B8%B0%EC%9A%A9%ED%92%88%20%EB%B0%8F%20%EC%83%9D%ED%99%9C%EC%9A%A9%ED%92%88%20%EC%95%88%EC%A0%84%EA%B4%80%EB%A6%AC%EB%B2%95 | 2026-11-14 | 현행 법률 제21065호(2025-10-01). 안전인증과 안전인증표시, 표시 없는 제품의 판매 금지를 둔다. 「KC」 문자는 법률 본문에 없다(하위 법령 미확인) |
| 「제품안전기본법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%A0%9C%ED%92%88%EC%95%88%EC%A0%84%EA%B8%B0%EB%B3%B8%EB%B2%95 | 2026-11-14 | 현행 법률 제21159호(2025-12-02 공포, 2026-06-03 시행). 정부의 수거등 권고·명령과 사업자의 수거등 의무를 둔다. 「리콜」이라는 낱말은 본문에 없다 |
| 「제조물 책임법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%A0%9C%EC%A1%B0%EB%AC%BC%20%EC%B1%85%EC%9E%84%EB%B2%95 | 2026-11-14 | 현행 법률 제14764호(2018-04-19 시행), 소관 공정거래위원회. 결함을 제조상·설계상·표시상으로 나누고 면책 사유 넷을 두며, 결함을 알고도 조치하지 않으면 일부 면책을 주장할 수 없다 |
| 「산업안전보건법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%82%B0%EC%97%85%EC%95%88%EC%A0%84%EB%B3%B4%EA%B1%B4%EB%B2%95 | 2026-11-14 | 현행 법률 제22122호(2026-10-27). 사업주의 위험성평가 실시 의무를 법률에 둔다(2026-06-01 시행 개정으로 근로자대표 참여·주지 신설). 2026-12~2027-10 시행 예정 개정분이 여럿 있다 |
| 「산업안전보건기준에 관한 규칙」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%82%B0%EC%97%85%EC%95%88%EC%A0%84%EB%B3%B4%EA%B1%B4%EA%B8%B0%EC%A4%80%EC%97%90%20%EA%B4%80%ED%95%9C%20%EA%B7%9C%EC%B9%99 | 2026-11-14 | 현행 고용노동부령 제450호(2025-09-01 공포, 2026-03-02 시행), 예정 개정분 없음(2026-11-14 기준) |
| 「사업장 위험성평가에 관한 지침」 | 고용노동부 | https://www.moel.go.kr/info/lawinfo/instruction/view.do?bbs_seq=20261100126 | 2026-11-14 | 고용노동부고시 제2026-73호로 전부개정(2026-11-04 게시). 시행일 확인 못 함 |
| 「중대재해 처벌 등에 관한 법률」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%A4%91%EB%8C%80%EC%9E%AC%ED%95%B4%20%EC%B2%98%EB%B2%8C%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0 | 2026-11-14 | 법률 제17907호(2021-01-26 제정, 2022-01-27 시행), 개정 이력 없음. 부칙: 상시 근로자 50명 미만 사업장(건설업은 공사금액 50억원 미만)은 공포 후 3년이 지난 날부터 적용. 고용노동부 보도자료로 2024-01-27 전면 적용 확인(https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=16136) |
| 「KOSHA 기술지원규정(KOSHA GUIDE)」 | 한국산업안전보건공단 | https://portal.kosha.or.kr/archive/statu-notic/tech-support/guide/overview | 2026-11-14 | 현행 명칭 「기술지원규정」. 공단이 제·개정하는 기술적 권고 지침이며 법적 구속력은 없다. 2026-01-30 437건 정비·공표, 정비 뒤 1,039건 운영(고용노동부 보도자료 https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18911) |
| 「KOSHA-MS」 | 한국산업안전보건공단 | https://portal.kosha.or.kr/business-apply-search/other-business/mfg-system/info | 2026-11-14 | 공단의 안전보건경영시스템 인증. 산업안전보건법의 자율 안전보건경영체제 지원을 수행근거로 한다. 2019-07 KOSHA 18001에서 KOSHA-MS로 인증기준 전환. 사후심사 매년 1회 이상, 3년마다 연장심사. ISO 45001과의 관계를 공단이 직접 쓴 문장은 확인 못 함 |
| 「폐기물관리법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%ED%8F%90%EA%B8%B0%EB%AC%BC%EA%B4%80%EB%A6%AC%EB%B2%95 | 2026-11-14 | 현행 법률 제21129호(2026-11-12 시행), 소관 기후에너지환경부. 사업장폐기물을 배출시설 설치·운영 사업장 등에서 나오는 폐기물로 정의한다. 2027년 시행 예정 개정분 있음 |
| 「식품위생법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%8B%9D%ED%92%88%EC%9C%84%EC%83%9D%EB%B2%95 | 2026-11-14 | 현행 법률 제21525호(2026-10-08 시행). 식품안전관리인증기준(HACCP)과 위해식품등 회수 의무(회수계획 사전 보고)를 둔다. 2026-12-31 이후 시행 예정 개정분 여럿 |
| 「축산물 위생관리법」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%B6%95%EC%82%B0%EB%AC%BC%20%EC%9C%84%EC%83%9D%EA%B4%80%EB%A6%AC%EB%B2%95 | 2026-11-14 | 현행 법률 제21525호(2026-10-08 시행). 축산물 안전관리인증기준을 둔다. 2026-12-31 시행 예정 개정분 있음 |
| 「식품 및 축산물 안전관리인증기준」 | 식품의약품안전처 | https://www.mfds.go.kr/brd/m_207/view.do?seq=15188 | 2026-11-14 | 식약처 고시. 최신 일부개정 제2026-60호(2026-08-11) |
| 「중소기업 스마트제조혁신 촉진에 관한 법률」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%20%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%A0%9C%EC%A1%B0%ED%98%81%EC%8B%A0%20%EC%B4%89%EC%A7%84%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0 | 2026-11-14 | 법률 제19181호(2023-01-03 제정, 2023-07-04 시행), 소관 중소벤처기업부. 약칭 스마트제조혁신법 |
| 「KS Q ISO 9001」 | 국가표준인증종합정보센터(국가기술표준원) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO9001&tmprKsNo=KSQISO9001 | 2026-11-14 | ISO 9001:2015+Amd1:2024와 부합(IDT), 최종 개정 2024-12-13. ISO 9001:2026과 판이 다르다 |
| 「KS Q ISO 9000」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO9000&tmprKsNo=KSQISO9000 | 2026-11-14 | ISO 9000:2005 IDT로 표시(이력에는 2015-12-29 ISO 9000:2015 반영 개정이 있어 포털 기록이 어긋남), 최종 확인 2026-08-25. 국제판 ISO 9000:2026과 다르다 |
| 「KS Q ISO 7870-2」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO7870-2&tmprKsNo=KSQISO7870-2 | 2026-11-14 | ISO 7870-2:2023 IDT, 최종 개정 2026-03-27 |
| 「KS Q ISO 22514-2」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO22514-2&tmprKsNo=KSQISO22514-2 | 2026-11-14 | ISO 22514-2:2013 IDT, 최종 확인 2023-04-21. 국제판 2026과 다르다 |
| 「KS Q ISO 2859-1」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO2859-1&tmprKsNo=KSQISO2859-1 | 2026-11-14 | ISO 2859-1:1999 IDT, 최종 개정 2023-12-29. 국제판 2026과 다르다 |
| 「KS X ISO 22400-2」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSXISO22400-2&tmprKsNo=KSXISO22400-2 | 2026-11-14 | ISO 22400-2:2014 IDT, 제정 2024-12-13 |
| 「KS A IEC 60300-3-11」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSAIEC60300-3-11&tmprKsNo=KSAIEC60300-3-11 | 2026-11-14 | IEC 60300-3-11 Ed.2.0 IDT, 최종 확인 2024-12-18 |
| 「KS A IEC 60812」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSAIEC60812&tmprKsNo=KSAIEC60812 | 2026-11-14 | 2003-11-29 제정 뒤 확인만 이어짐(최종 2023-06-26). 부합 IEC 판 정보 없음 — 현행 IEC 60812:2018과 같다고 말하지 않는다 |
| 「KS X IEC 62264-1」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSXIEC62264-1&tmprKsNo=KSXIEC62264-1 | 2026-11-14 | IEC 62264-1:2013 IDT, 제정 2024-12-13 |
| 「KS I ISO 14001」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSIISO14001&tmprKsNo=KSIISO14001 | 2026-11-14 | ISO 14001:2015 IDT, 최종 확인 2026-11-12. 국제판 2026과 다르다 |
| 「KS Q ISO 45001」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO45001&tmprKsNo=KSQISO45001 | 2026-11-14 | ISO 45001:2018 IDT, 최종 확인 2024-10-04 |
| 「KS Q ISO 22000」 | 국가기술표준원(e나라표준인증) | https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchView.do?menuId=919&topMenuId=502&upperMenuId=503&ksNo=KSQISO22000&tmprKsNo=KSQISO22000 | 2026-11-14 | ISO 22000:2018 IDT, 최종 확인 2026-08-25 |
| 「스마트공장 수준확인 사업」 | 중소벤처기업부·스마트제조혁신추진단 | https://www.smart-factory.kr/ | 2026-11-14 | 중소벤처기업부 공고 제2026-45호(2026-01-30)의 사업 명칭. 스마트화 수준확인서와 심사보고서를 준다. 공고 사본 https://gecci.korcham.net/file/dext5uploaddata/2026/2026년도%20스마트공장%20수준확인%20사업%20공고__.pdf (지원 규모는 해마다 바뀌므로 세션에서 공고로 확인) |
| 「식품 등의 표시·광고에 관한 법률」 | 국회법률정보시스템 | https://likms.assembly.go.kr/law/lawsLawtInqyList1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2004&orgCd=ORG20_0000&pageSize=50&srchNm=%EC%8B%9D%ED%92%88%20%EB%93%B1%EC%9D%98%20%ED%91%9C%EC%8B%9C%C2%B7%EA%B4%91%EA%B3%A0%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0 | 2026-11-14 | 현행 법률 제20826호(2025-03-18 공포, 2025-09-19 시행), 소관 식품의약품안전처. 위해식품 의무회수의 근거 법 가운데 하나(식약처 회수지침) |
| 「식품 등 이력추적관리기준」 | 식품의약품안전처 | https://www.mfds.go.kr/brd/m_207/view.do?seq=15169 | 2026-11-14 | 식약처 고시 제2026-39호(2026-05-15) 개정 |
| 「위해식품등 회수지침」 | 식품의약품안전처 | https://www.mfds.go.kr/brd/m_1059/view.do?seq=15143 | 2026-11-14 | 지침서(2025-02-17). 의무회수와 자율회수, 회수등급 1~3등급 |
| 「HSG65」 | 영국 HSE | https://www.hse.gov.uk/pubns/books/hsg65.htm | 2026-11-14 | Managing for health and safety, 3판(2013). Plan-Do-Check-Act 운영 지침 |
| 「ISO 9000」 | ISO | https://www.iso.org/standard/9000 | 2026-11-14 | ISO 9000:2026(5판) 발행(2026-05). 품질경영 기본 원칙 7가지와 용어 |
| 「ISO 9001」 | ISO | https://www.iso.org/standard/88464.html | 2026-11-14 | ISO 9001:2026 발행(2026-09-16), 2015판 폐지 |
| 「ISO 7870-2」 | ISO | https://www.iso.org/standard/78859.html | 2026-11-14 | ISO 7870-2:2023 슈하트 관리도 |
| 「ISO 22514-2」 | ISO | https://www.iso.org/standard/88883.html | 2026-11-14 | ISO 22514-2:2026 발행(2026-02-06) 공정능력·성능 |
| 「ISO 2859-1」 | ISO | https://www.iso.org/standard/85464.html | 2026-11-14 | ISO 2859-1:2026 발행(2026-01-22), 1999판 폐지 |
| 「ISO 13053-1」 | ISO | https://www.iso.org/standard/52901.html | 2026-11-14 | ISO 13053-1:2011 6시그마 DMAIC, 2022 재확인 |
| 「ISO 22400-2」 | ISO | https://www.iso.org/standard/54497.html | 2026-11-14 | ISO 22400-2:2014+Amd1:2017 제조 운영 KPI. 2판 개정 진행 중(https://www.iso.org/standard/87563.html) |
| 「IEC 60300-3-11」 | IEC | https://webstore.iec.ch/en/publication/1296 | 2026-11-14 | IEC 60300-3-11:2009 신뢰성 중심 보전(RCM) |
| 「IEC 60812」 | IEC | https://webstore.iec.ch/en/publication/26359 | 2026-11-14 | IEC 60812:2018 FMEA·FMECA |
| 「IEC 62264-1」 | IEC | https://webstore.iec.ch/en/publication/6675 | 2026-11-14 | IEC 62264-1:2013 기업-제어 시스템 통합(ISA-95) |
| 「ISO 45001」 | ISO | https://www.iso.org/standard/45001/rev | 2026-11-14 | ISO 45001:2018+Amd1:2024 유효. 개정판 DIS 진행 중, 발행일 미정 |
| 「ISO 14001」 | ISO | https://www.iso.org/standard/14001 | 2026-11-14 | ISO 14001:2026 발행(2026-04-15) |
| 「ISO 22000」 | ISO | https://www.iso.org/standard/65464.html | 2026-11-14 | ISO 22000:2018 유효, 개정 진행 중 |
| 「FSSC 22000」 | FSSC Foundation | https://www.fssc.com/fssc-22000/version-7-faq/ | 2026-11-14 | Version 7 공개(2026-05-01). V6 심사는 2027-04-30까지 |
| 「Codex 식품위생 일반원칙(CXC 1-1969)」 | FAO/WHO Codex | https://openknowledge.fao.org/handle/20.500.14283/cc6125en | 2026-11-14 | 1969 채택, 최종 개정 2022(2023 발행본 표지). HACCP 원칙 포함 |
| 「미국 식품안전현대화법(FSMA)」 | 미국 FDA | https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-safety-modernization-act-fsma | 2026-11-14 | FDA FSMA 공식 안내 |
| 「미국 산업안전보건법(OSH Act)」 | 미국 OSHA | https://www.osha.gov/laws-regs/oshact/completeoshact | 2026-11-14 | OSH Act of 1970 전문 |
| 「EU 산업안전보건 기본 지침(89/391/EEC)」 | 유럽 산업안전보건청(EU-OSHA) | https://osha.europa.eu/en/legislation/directives/the-osh-framework-directive/the-osh-framework-directive-introduction | 2026-11-14 | 1989년 채택된 EU 산업안전보건의 기본 지침. 유럽 전역의 최소 요건이며 회원국은 더 엄격하게 정할 수 있다. 사업주의 위험성평가·예방 조치·정보 제공·교육·근로자 참여 의무를 정한다. 원문은 https://eur-lex.europa.eu/eli/dir/1989/391/oj (자동 조회는 첫 화면으로 돌아가 원문 미열람) |
| 「EU 일반제품안전규정(2023/988)」 | 유럽의회 입법 관측소 | https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1745266 | 2026-11-14 | 2001/95/EC를 폐지하는 규정. 발효 2023-06-12, 적용 2024-12-13. 위험 제품을 안 사업자는 회수 등 시정 조치를 하고 소비자와 시장감시 당국에 알린다 |
| 「EU 제조물책임 지침(2024/2853)」 | 유럽의회 입법 관측소 | https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1795969 | 2026-11-14 | 85/374/EEC를 폐지하는 지침. 2026-12-09 이후 출시·사용 개시된 제품에 적용, 발효 2024-12-08, 회원국 이행 기한 2026-12-09. EUR-Lex 원문 https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng 은 자동 조회로 열리지 않음 |

학술·실무 출처(명칭 표기 없이 본문에서 쓰는 것):

- Little(1961), A Proof for the Queuing Formula L = λW — <https://doi.org/10.1287/opre.9.3.383> (2026-11-14)
- Hayes·Wheelwright(1979), Link Manufacturing Process and Product Life Cycles — <https://hbr.org/1979/01/link-manufacturing-process-and-product-life-cycles> (2026-11-14)
- ILO, Introduction to Work Study(4판) — <https://www.ilo.org/publications/introduction-work-study-4th-revised-edition> (2026-11-14, 검색 결과로 확인)
- 도요타 공식 TPS 설명 — <https://global.toyota/en/company/vision-and-philosophy/production-system/> (2026-11-14)
- Lean Enterprise Institute — <https://www.lean.org/> (2026-11-14)
- ASCM CPIM — <https://www.ascm.org/learning-development/certifications-credentials/cpim/> (2026-11-14)
- JIPM TPM — <https://www.jipm.or.jp/business/tpm/> (2026-11-14)

