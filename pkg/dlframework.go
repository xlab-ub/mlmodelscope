package web

import (
	"net/http"

	"github.com/go-openapi/loads"

	dlframework "github.com/c3sr/dlframework/http"
	"github.com/c3sr/dlframework/httpapi/restapi"
	"github.com/c3sr/dlframework/httpapi/restapi/operations"
)

func getDlframeworkHandler() (http.Handler, error) {
	swaggerSpec, err := loads.Analyzed(restapi.SwaggerJSON, "")
	if err != nil {
		return nil, err
	}

	api := operations.NewDlframeworkAPI(swaggerSpec)
	handler := dlframework.ConfigureAPI(api)

	return handler, nil
}
