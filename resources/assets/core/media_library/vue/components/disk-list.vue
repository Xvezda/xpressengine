<template>
  <div class="media-library-aside">
    <!-- 2019/06/27 사용자 UI 팝업에서 저장소 영역 애니메이션 적용을 위해 class="media-library-aside-inner" 추가 됨(스타일 적용되어 있음) -->
    <div class="media-library-aside-inner">
      <h3 class="media-library-aside__title">저장소</h3>
      <!--
        [D] 저장소 메뉴 열릴 때(class="media-library-aside__mobile-button" 버튼 영역 클리 시) class="media-library-aside__content" 영역에 class="open" 추가 (화살표 방향 변경, 저장소 팝업 노출)
      -->
      <div class="media-library-aside__content">
        <button type="button" class="media-library-aside__mobile-button">
          Main Assets
          <span class="media-library-aside__mobile-button-icon">
            <i class="xi-angle-down-min"></i>
          </span>
        </button>
        <ul class="media-library-aside__list">
          <!-- [D] 선택 되어져 있는 저장소 li 태그에 class="on" 추가 -->
          <li class="on">
            <button type="button" class="media-library-aside__button">Main Assets</button>
          </li>
          <li>
            <button type="button" class="media-library-aside__button">Common</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
