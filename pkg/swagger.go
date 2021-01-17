package web

import (
	"net/http"

	"github.com/labstack/echo"
	dlframework "github.com/c3sr/dlframework/httpapi/restapi"
	swaggerui "github.com/c3sr/web/swaggerui"
)

func swaggerUIAssets(e *echo.Echo) error {
	e.Any("/api/v1/swagger.json", func(c echo.Context) error {
		bts, err := dlframework.SwaggerJSON.MarshalJSON()
		if err != nil {
			return err
		}
		return c.JSONBlob(http.StatusOK, bts)
	})
	e.Any("/swagger/*", StripPrefix("/swagger", swaggerui.Handle()))
	return nil
}
