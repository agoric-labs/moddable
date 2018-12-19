# export MODDABLE := $(HOME)/bindmounts/trees/moddable
export PATH := $(MODDABLE)/build/bin/lin/release:$(PATH)

do-build:
	cd examples/cli && mcconfig -p wasm-standalone-cli
	cd build/tmp/wasm-standalone-cli/release/cli && $(MAKE)
	# ./build/bin/wasm-standalone-cli/release/cli

clean:
	-rm -r build/tmp/wasm-standalone-cli/release/cli
	-rm build/bin/wasm-standalone-cli/release/cli

