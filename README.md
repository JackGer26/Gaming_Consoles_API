# Gaming Console API

My comprehensive REST API providing detailed information about gaming consoles spanning from 1990 to 2022.

**Link to project:** https://gaming-console-api-db1859af4f61.herokuapp.com/

## How It's Made:

**Tech used:** Node.js, Express.js, JavaScript, CORS

This API uses Express.js to create a robust server that serves gaming console information through RESTful endpoints. The project structure includes a comprehensive console database stored as a JavaScript object, with each console containing detailed specifications including manufacturer, release year, pricing, storage, resolution, exclusive games, backwards compatibility, online services, and CPU information.

The server implements CORS middleware to enable cross-origin requests, making it accessible from web applications hosted on different domains. Each API endpoint uses route parameters to accept console names, converts them to lowercase for case-insensitive matching, and returns either the specific console data or a default "unknown" response for invalid requests.

The console database spans four generations of gaming:
- **Modern Era:** PlayStation 5, Xbox Series X, Nintendo Switch, Steam Deck
- **Previous Generation:** PlayStation 4, Xbox One, Nintendo 3DS  
- **Classic Era:** Nintendo Wii, PlayStation 3, Xbox 360
- **Retro Era:** GameCube, Dreamcast, Nintendo 64, Super Nintendo

## API Endpoints:

- `GET /` - Serves the main HTML documentation page
- `GET /api/:consolename` - Returns detailed information for a specific console

### Example Usage:
```
GET https://gaming-console-api-db1859af4f61.herokuapp.com/api/playstation 5
GET https://gaming-console-api-db1859af4f61.herokuapp.com/api/xbox series x
GET https://gaming-console-api-db1859af4f61.herokuapp.com/api/nintendo switch
GET https://gaming-console-api-db1859af4f61.herokuapp.com/api/steam deck
```

### Example Response:
```json
{
  "manufacturer": "Sony",
  "releaseYear": 2020,
  "price": 499.99,
  "storage": "825GB SSD",
  "resolution": "4K",
  "exclusiveGames": ["Spider-Man: Miles Morales", "Demon's Souls", "Ratchet & Clank"],
  "backwardsCompatible": true,
  "onlineService": "PlayStation Plus",
  "cpu": "AMD Zen 2"
}
```

## Optimizations

Firstly, if I had additional time to work on this project, I would implement a proper database system (such as MongoDB or PostgreSQL) instead of storing data in a JavaScript object. This would allow for better data persistence, scalability, and the ability to add CRUD operations for managing console entries.

Secondly, I would add input validation and sanitization middleware to ensure that console names are properly formatted and protected against potential security vulnerabilities. This would include implementing rate limiting to prevent API abuse and adding authentication for any future admin endpoints.

Finally, I would enhance the API with additional features such as:
- Search functionality with filters (by manufacturer, year, price range)
- Pagination for better performance with larger datasets
- API versioning to maintain backwards compatibility
- Comprehensive error handling with proper HTTP status codes
- API documentation using tools like Swagger/OpenAPI

## Lessons Learned:

**Data Structure Design** - Organizing console information in a consistent, well-structured format made the API predictable and easy to use. Ensuring each console object follows the same schema prevents inconsistencies and makes the API more reliable for developers consuming the data.

**RESTful API Principles** - Building this API taught me the importance of following REST conventions, using appropriate HTTP methods, and designing intuitive endpoint structures. Clear, descriptive URLs like `/api/playstation 5` make the API self-documenting and user-friendly.

**Error Handling and Fallbacks** - Implementing a robust fallback system (returning "unknown" console data for invalid requests) ensures the API always responds gracefully, even when users request non-existent consoles. This prevents applications from breaking due to unexpected API responses.

**CORS Configuration** - Understanding Cross-Origin Resource Sharing was crucial for making this API accessible from web applications. Properly configuring CORS middleware enables frontend applications to consume the API without running into browser security restrictions.

**Historical Data Curation** - Researching and compiling accurate information about gaming consoles from different eras highlighted the importance of data accuracy and consistency. This project reinforced the value of thorough research and fact-checking when building informational APIs.
