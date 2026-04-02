/**
 * Splits an array into paginated chunks or retrieves items for a specific page.
 *
 * @template T - The type of elements contained in the input array.
 *
 * @param {T[]} array - The source array to paginate.
 * @param {number} [perPage=3] - Number of items per page. Defaults to 3.
 * @param {number} [pageNo=0] - The page number to retrieve.
 *   - If `pageNo` is `0`, the function returns all pages as a nested array.
 *   - If `pageNo` is greater than `0`, the function returns only the items for that page.
 *
 * @returns {{
 *   totalPages: number,
 *   pageItems: ((T)[] | (T)[][])
 * }} An object containing:
 *   - `totalPages`: The total number of pages based on `array.length` and `perPage`.
 *   - `pageItems`: Either:
 *       - A single page of items (`T[]`) when `pageNo > 0`.
 *       - All pages as a nested array (`T[][]`) when `pageNo === 0`.
 *
 * @example
 * ```ts
 * // Retrieve items for page 1 (first page)
 * const { totalPages, pageItems } = paging([1,2,3,4,5,6,7], 3, 1);
 * console.log(totalPages); // 3
 * console.log(pageItems);  // [1,2,3]
 * ```
 *
 * @example
 * ```ts
 * // Retrieve all pages
 * const { totalPages, pageItems } = paging([1,2,3,4,5,6,7], 3);
 * console.log(totalPages); // 3
 * console.log(pageItems);  // [[1,2,3],[4,5,6],[7]]
 * ```
 */
export function paging<T>(
  array: T[],
  perPage: number = 3,
  pageNo: number = 0,
): {
  totalPages: number;
  pageItems: T[] | T[][];
} {
  const start = Math.abs(pageNo - 1) * perPage;
  const end = start + perPage;
  const totalPages = Math.ceil(array.length / perPage);
  let pageItems: T[] | T[][];
  if (pageNo === 0) {
    const allItems: T[][] = [];

    for (let i = 0; i < array.length; i = i + perPage) {
      console.log(1);
      pageItems = array
        .map((el, index) => {
          if (index >= i && index < i + perPage) {
            return el;
          }
        })
        // .filter(Boolean); // does not fix typing
        .filter((x): x is T => x !== undefined);

      allItems.push(pageItems);
    }
    pageItems = allItems;
  } else {
    pageItems = array
      .map((el, index) => {
        if (index >= start && index < end) {
          return el;
        }
      })
      //   .filter(Boolean); // does not fix typing
      .filter((x): x is T => x !== undefined);
  }
  return {
    totalPages,
    pageItems,
  };
}
