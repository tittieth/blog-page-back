# blog-page-back

Dagbok med NoSQL

I den här övningen så skall du skapa ett verktyg för att skriva dagboksinlägg, som en blogg eller en journal.
Skapa en backend server med express och MongoDB med ett REST api som tar emot nya inlägg via POST och sparar dem i databasen samt skickar befintliga inlägg via en GET.

Bonus:

Skapa olika användare. Och koppla ihop inlägg med användare, så att du på sidan skulle kunna visa vem som har skrivit vilka inlägg.

Se om du kan öka säkerheten för ditt API genom att lägga till en API nyckel som måste skickas med i anropen och som testas på servern innan nya inlägg sparas i databasen. Dvs bara en inloggad användare kan skicka nya inlägg till databasen. Men alla får hämta och visa inlägg från databasen.