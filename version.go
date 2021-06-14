package main

import (
	"github.com/c3sr/config"
)

var (
	// These fields are populated by govvv
	Version    = "0.4.10"
	BuildDate  string
	GitCommit  string
	GitBranch  string
	GitState   string
	GitSummary string
)

func init() {
	config.App.Version = config.VersionInfo{
		Version:    Version,
		BuildDate:  BuildDate,
		GitCommit:  GitCommit,
		GitBranch:  GitBranch,
		GitState:   GitState,
		GitSummary: GitSummary,
	}
}
