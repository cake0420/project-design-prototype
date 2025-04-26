document.addEventListener('DOMContentLoaded', function() {
  // 모달 요소
  const userTypeModal = document.getElementById('userTypeModal');
  const confirmUserTypeBtn = document.getElementById('confirmUserType');
  const modalContent = userTypeModal.querySelector('.bg-white');

  // 사용자 유형 선택 기능
  const userTypeOptions = document.querySelectorAll('.user-type-option');
  const userTypeRadios = document.querySelectorAll('input[name="userType"]');

  // 선택된 소셜 로그인 버튼 저장 변수
  let selectedSocialButton = null;

  // 초기 상태에서 첫 번째 옵션 선택 표시
  userTypeOptions[0].classList.add('selected');

  // 사용자 유형 옵션 클릭 시 라디오 버튼 선택
  userTypeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const type = this.dataset.type;
      const radio = this.querySelector('input[type="radio"]');

      // 모든 라디오 버튼 선택 해제
      userTypeRadios.forEach(r => r.checked = false);

      // 클릭한 옵션의 라디오 버튼 선택
      radio.checked = true;

      // 시각적 표시 (선택된 옵션 강조)
      userTypeOptions.forEach(opt => {
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

  // 소셜 로그인 버튼 클릭 시 사용자 유형 선택 모달 표시
  const socialLoginButtons = document.querySelectorAll('button.w-full');

  socialLoginButtons.forEach(button => {
    // 호버 효과 추가
    button.classList.add('hover-scale');

    button.addEventListener('click', function(e) {
      // 기본 동작 방지
      e.preventDefault();

      // 클릭한 소셜 로그인 버튼 저장
      selectedSocialButton = this;

      // 사용자 유형 선택 모달 표시
      userTypeModal.classList.remove('hidden');

      // 애니메이션 재설정 및 적용
      modalContent.style.animation = 'none';
      modalContent.offsetHeight; // 리플로우 강제
      modalContent.style.animation = null;
      modalContent.classList.add('animate-fadeIn');
    });
  });

  // 모달 외부 클릭 시 모달 닫기
  userTypeModal.addEventListener('click', function(e) {
    if (e.target === userTypeModal) {
      closeModal();
    }
  });

  // 모달 닫기 함수
  function closeModal() {
    // 페이드아웃 애니메이션 추가
    modalContent.style.animation = 'fadeIn 0.3s ease-out reverse forwards';

    // 애니메이션 완료 후 모달 숨기기
    setTimeout(() => {
      userTypeModal.classList.add('hidden');
      modalContent.style.animation = null;
    }, 300);
  }

  // 확인 버튼에 호버 효과 추가
  confirmUserTypeBtn.classList.add('hover-scale');

  // 사용자 유형 선택 완료 버튼 클릭 시
  confirmUserTypeBtn.addEventListener('click', function() {
    // 선택된 사용자 유형 가져오기
    const selectedType = document.querySelector('input[name="userType"]:checked').value;

    // 모달 닫기
    closeModal();

    // 예시: 로컬 스토리지에 저장 (실제 구현에서는 서버에 저장해야 함)
    localStorage.setItem('userType', selectedType);

    // 사용자 유형에 따라 적절한 마이페이지로 리디렉션 (실제 로그인 후)
    console.log(`사용자 유형 "${selectedType}"으로 회원가입 진행`);

    // 실제 구현에서는 이 부분을 주석 해제하고 소셜 로그인 처리 후 리디렉션
    // if (selectedType === 'mentee') {
    //   window.location.href = 'mypage-mentee.html';
    // } else {
    //   window.location.href = 'mypage.html';
    // }

    // 소셜 로그인 버튼이 선택되었다면 해당 버튼의 원래 기능 실행 (실제 구현에서는 이 부분을 수정)
    if (selectedSocialButton) {
      // 약간의 지연 후 알림 표시 (모달 닫힘 애니메이션이 완료된 후)
      setTimeout(() => {
        alert(`${selectedSocialButton.textContent.trim()}으로 ${selectedType} 유형 회원가입을 진행합니다.`);
        // 실제 구현에서는 여기서 소셜 로그인 처리를 진행
      }, 350);
    }
  });

  // ESC 키 누르면 모달 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !userTypeModal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
