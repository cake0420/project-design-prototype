document.addEventListener('DOMContentLoaded', function() {
  // 매칭 유형 선택 기능
  const matchingTypeOptions = document.querySelectorAll('.matching-type-option');
  const matchingTypeRadios = document.querySelectorAll('input[name="matchingType"]');
  const confirmMatchingTypeBtn = document.getElementById('confirmMatchingType');
  
  // 초기 상태에서 첫 번째 옵션 선택 표시
  matchingTypeOptions[0].classList.add('selected');

  // 매칭 유형 옵션 클릭 시 라디오 버튼 선택
  matchingTypeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const type = this.dataset.type;
      const radio = this.querySelector('input[type="radio"]');

      // 모든 라디오 버튼 선택 해제
      matchingTypeRadios.forEach(r => r.checked = false);

      // 클릭한 옵션의 라디오 버튼 선택
      radio.checked = true;

      // 시각적 표시 (선택된 옵션 강조)
      matchingTypeOptions.forEach(opt => {
        opt.classList.remove('selected');
      });

      this.classList.add('selected');

      // 애니메이션 효과 추가
      this.classList.add('animate-scaleIn');
      setTimeout(() => {
        this.classList.remove('animate-scaleIn');
      }, 300);
    });
  });

  // 선택 완료 버튼 클릭 시
  confirmMatchingTypeBtn.addEventListener('click', function() {
    // 선택된 매칭 유형 가져오기
    const selectedType = document.querySelector('input[name="matchingType"]:checked').value;

    // 로컬 스토리지에 저장
    localStorage.setItem('matchingType', selectedType);
    
    // 매칭 유형에 따라 적절한 페이지로 리디렉션
    if (selectedType === 'ai') {
      // AI 매칭 페이지로 이동 (아직 구현되지 않았으므로 일단 match.html로 리디렉션)
      alert('AI 매칭 기능은 현재 개발 중입니다. 수동 매칭 페이지로 이동합니다.');
      window.location.href = 'match.html';
    } else {
      // 수동 매칭 페이지로 이동
      window.location.href = 'match.html';
    }
  });
});