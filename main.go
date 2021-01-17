package main

import (
	"github.com/pkg/profile"
	"github.com/c3sr/mlmodelscope/cmd"
)

func pprof() {
	profile.Start(
		profile.MemProfile,
		// profile.CPUProfile,
		// profile.TraceProfile,
		profile.ProfilePath("."),
	)
}

func main() {
	if false {
		pprof()
	}
	cmd.Execute()
}
