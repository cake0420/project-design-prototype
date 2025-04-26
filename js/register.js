document.addEventListener('DOMContentLoaded', function() {
  // 사용자 유형 선택 기능
  const userTypeOptions = document.querySelectorAll('.user-type-option');
  const userTypeRadios = document.querySelectorAll('input[name="userType"]');

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
        opt.classList.remove('border-primary');
        opt.classList.add('border-gray-200');
      });
      
      this.classList.remove('border-gray-200');
      this.classList.add('border-primary');
    });
  });

  // 소셜 로그인 버튼 클릭 시 사용자 유형 정보 저장
  const socialLoginButtons = document.querySelectorAll('button.w-full');
  
  socialLoginButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // 실제 구현에서는 이 정보를 서버로 전송하거나 로컬 스토리지에 저장
      const selectedType = document.querySelector('input[name="userType"]:checked').value;
      
      // 예시: 로컬 스토리지에 저장 (실제 구현에서는 서버에 저장해야 함)
      localStorage.setItem('userType', selectedType);
      
      // 사용자 유형에 따라 적절한 마이페이지로 리디렉션 (실제 로그인 후)
      // 이 예시에서는 실제 로그인 처리는 생략하고 리디렉션만 보여줌
      console.log(`사용자 유형 "${selectedType}"으로 회원가입 진행`);
      
      // 실제 구현에서는 이 부분을 주석 해제
      // if (selectedType === 'mentee') {
      //   window.location.href = 'mypage-mentee.html';
      // } else {
      //   window.location.href = 'mypage.html';
      // }
      
      // 예시를 위해 기본 동작 방지 (실제 구현에서는 제거)
      e.preventDefault();
    });
  });
});