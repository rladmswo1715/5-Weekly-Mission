export const urlCopy = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사되었습니다.");
  } catch (error) {
    alert("주소 복사 실패..");
  }
};
