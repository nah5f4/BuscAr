from app.core.config import settings
from app.schemas import Stop
import requests
from requests.cookies import RequestsCookieJar
from pydantic import TypeAdapter


LOGIN_URL = f"{settings.PREFIX_URL}/Login/Autenticar"


def login() -> RequestsCookieJar:
    """
    Login to Olho Vivo API and return the cookies to use in other endpoint calls.
    """
    response = requests.post(LOGIN_URL, params={"token": settings.API_TOKEN})
    response.raise_for_status()
    return response.cookies


STOPS_URL = f"{settings.PREFIX_URL}/Parada"
STOPS_BY_LINE_URL = f"{STOPS_URL}/BuscarParadasPorLinha"


def get_stops_by_line(credentials: RequestsCookieJar, line_id: int) -> list[Stop]:
    """
    Get all the stops for the given line.

    Parameters:
    - `credentials`: Saved cookies from a previous login call.
    - `line_id`: The id of the line.
    """
    response = requests.get(
        STOPS_BY_LINE_URL,
        params={"codigoLinha": line_id},
        cookies=credentials,
    )
    response.raise_for_status()
    return TypeAdapter(list[Stop]).validate_python(response.json())
