// Задание 4: Интеграция с DOM (Парсинг сырых данных)
// Преобразование данных из HTML-формы в строго типизированный объект
/**
 * Создаёт объект Book из данных HTML-формы.
 *
 * ВАЖНО: Данные из формы всегда приходят как строки.
 * Ваша задача — преобразовать их в правильные типы и проверить границы значений.
 */
export function createBookFromForm(formData) {
    // TODO 1: Получите сырые значения полей формы
    // Используйте formData.get("fieldName") as string
    // Поля: title, authors, year, rating
    const titleRaw = formData.get("title");
    const authorsRaw = formData.get("authors");
    const yearRaw = formData.get("year");
    const ratingRaw = formData.get("rating");
    // TODO 2: Обработайте авторов
    // Разбейте строку по запятой, уберите лишние пробелы (trim), 
    // отфильтруйте пустые строки. Результат должен быть массивом string[].
    const authors = authorsRaw
        .split(",")
        .map((author) => author.trim())
        .filter((author) => author.length > 0);
    // TODO 3: Преобразуйте год
    // Если поле года заполнено, преобразуйте строку в число через parseInt(str, 10).
    // Если поле пустое, значение должно остаться undefined.
    const year = yearRaw ? parseInt(yearRaw, 10) : undefined;
    // TODO 4: Преобразуйте и ВАЛИДИРУЕМ рейтинг
    // Если поле рейтинга заполнено, преобразуйте строку в число через parseFloat.
    // Проверьте: если полученное число меньше 0 или больше 5, 
    // выбросьте ошибку: throw new Error("Рейтинг должен быть числом от 0 до 5");
    // Если поле пустое, значение должно остаться undefined.
    let rating = undefined;
    if (ratingRaw) {
        rating = parseFloat(ratingRaw);
        // Бизнес-правило: рейтинг строго от 0 до 5
        if (rating < 0 || rating > 5) {
            throw new Error("Рейтинг должен быть числом от 0 до 5");
        }
    }
    // TODO 5: Сгенерируйте уникальный ID
    // Используйте встроенную функцию crypto.randomUUID()
    // TODO 6: Верните итоговый объект Book
    return {
        id: crypto.randomUUID(), // Генерируем уникальный строковый идентификатор
        title: titleRaw,
        authors: authors,
        year: year,
        rating: rating,
    };
}
