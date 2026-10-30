{
  inputs = {
    utils.url = "github:numtide/flake-utils";
  };
  outputs =
    {
      self,
      nixpkgs,
      utils,
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        python = pkgs.python3.withPackages (p: with p; [
          playwright
        ]);

        pw-driver = pkgs.playwright-driver.browsers-chromium;
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            python
            pw-driver
            nodejs_24
          ];

          PLAYWRIGHT_BROWSERS_PATH = "${pw-driver}";
          PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
        };
      }
    );
}
