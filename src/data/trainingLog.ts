// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
// 생성: tistory 프로젝트의 `python src/site_sync.py`
// 티스토리에 발행된 기업교육 후기 기록입니다.
// 모집 중인 유료 공개과정(courses 배열)과는 성격이 다르므로 섞지 마세요.

export type TrainingRecord = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary: string;
  thumbnail: string; // public/ 기준 경로 (없으면 빈 문자열)
  tags: string[];
  url: string;       // 티스토리 원문
};

export const trainingLog: TrainingRecord[] = [
  {
    id: "224382617693",
    title: "경력직 신규 입사자 교육, 왜 문제해결 과정으로 할까? (공공기관 5시간 운영 후기)",
    date: "2026-08-18",
    summary: "경력직으로 입사한 사람에게 필요한 교육은 신입사원 교육과 다르다. 실무를 못해서 오는 것이 아니기 때문이다. 오히려 각자 잘하는 방식이 이미 굳어져 있어서, 새 조직에서 여럿이 함께 문제를 풀 때 속도가 떨어진다. 한 공공 에너지 연구기관에서 경력직 신규 입사자를 대상으로 진행한 5시간 과정의 설계와 운영 기록을 정리한다.",
    thumbnail: "/training/224382617693.png",
    tags: ["경력직교육", "문제해결교육", "온보딩교육", "팀워크교육"],
    url: "https://editor870508.tistory.com/entry/%EA%B2%BD%EB%A0%A5%EC%A7%81-%EC%8B%A0%EA%B7%9C-%EC%9E%85%EC%82%AC%EC%9E%90-%EA%B5%90%EC%9C%A1-%EC%99%9C-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95%EC%9C%BC%EB%A1%9C-%ED%95%A0%EA%B9%8C-%EA%B3%B5%EA%B3%B5%EA%B8%B0%EA%B4%80-5%EC%8B%9C%EA%B0%84-%EC%9A%B4%EC%98%81-%ED%9B%84%EA%B8%B0"
  }
];
