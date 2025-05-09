const BASE_URL = "https://portal.jejunu.ac.kr/api/jnu/meal/index.jsp";

export function fetchBackFood(searchDay: string) {
  console.log(`url : ${BASE_URL}?date=${searchDay}&place=MEALFIX_002`);
  return fetch(`${BASE_URL}?date=${searchDay}&place=MEALFIX_002`).then(
    (response) => response.json()
  );
}
export function fetchSaFood(searchDay: string) {
  return fetch(`${BASE_URL}?date=${searchDay}&place=MEALFIX_003`).then(
    (response) => response.json()
  );
}
export function fetchSixFood(searchDay: string) {
  return fetch(`${BASE_URL}?date=${searchDay}&place=MEALFIX_001`).then(
    (response) => response.json()
  );
}
export function fetchProFood(searchDay: string) {
  return fetch(`${BASE_URL}?date=${searchDay}&place=FIXMENU_002`).then(
    (response) => response.json()
  );
}
export function fetchOneFood(searchDay: string) {
  return fetch(`${BASE_URL}?date=${searchDay}&place=FIXMENU_001`).then(
    (response) => response.json()
  );
}
