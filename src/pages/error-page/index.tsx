import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    // Verifica se o erro é uma instância de Error
    if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    }

    // Se o erro não for uma instância de Error, lide com outros tipos de erro
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as { statusText?: string }).statusText || "Unknown error"}</i>
            </p>
        </div>
    );
}
