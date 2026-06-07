/**
 * Set C3 - Async/Await Movie Data Fetch Engine Wrapper Implementation
 */
class SecureMovieFetchGateway {
  constructor(apiBaseUrlString, authenticationTokenKey) {
    this.baseUrl = apiBaseUrlString;
    this.token = authenticationTokenKey;
  }

  async fetchMovieRecordsByQuery(searchKeywordString, secondaryPageMarker = 1) {
    const structuralQueryUrl = `${this.baseUrl}/?apikey=${this.token}&s=${encodeURIComponent(searchKeywordString)}&page=${secondaryPageMarker}`;
    
    try {
      const networkResponse = await fetch(structuralQueryUrl);

      // Handle server-side network errors gracefully
      if (!networkResponse.ok) {
        if (networkResponse.status === 429) throw new Error("API Limit Reached: Too many requests. Please try again in a few moments.");
        if (networkResponse.status === 401) throw new Error("Authentication Failure: Expired credentials token.");
        throw new Error(`Network Communication Failure. Status code returned: ${networkResponse.status}`);
      }

      const parsedJsonPayload = await networkResponse.json();
      
      if (parsedJsonPayload.Response === "False") {
        throw new Error(parsedJsonPayload.Error || "No search results match your criteria.");
      }

      return {
        success: true,
        dataEntriesList: parsedJsonPayload.Search,
        totalMetricsCount: parsedJsonPayload.totalResults,
        errorFeedMessage: null
      };

    } catch (caughtProcessingError) {
      console.error(`[GATEWAY PROCESSING ERROR] ${caughtProcessingError.message}`);
      return {
        success: false,
        dataEntriesList: [],
        totalMetricsCount: 0,
        errorFeedMessage: caughtProcessingError.message
      };
    }
  }
}