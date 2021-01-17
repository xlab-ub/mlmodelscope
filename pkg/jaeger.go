package web

import (
	"github.com/labstack/echo"
	"github.com/c3sr/web/jaegerui"
)

func jaegerAssets(e *echo.Echo) error {
	e.Any("/jaeger/*", jaegerui.Handle())
	return nil
}
