import fs from 'fs'
import path from 'path'
/**
 * Recursively clones the contents of a directory from the source path to the destination path.
 *
 * @param source - The source directory path to be cloned.
 * @param dest - The destination directory path where the source directory contents will be copied.
 *
 * @remarks
 * This function copies all the files and subdirectories from the source directory to the destination directory.
 *
 * @throws Throws an error if the source directory does not exist.
 *
 * @example
 * ```typescript
 * cloneDir('/path/to/source', '/path/to/destination');
 * ```
 */
export function cloneDir(source: string, dest: string): void {
  const contentOfDir = fs.readdirSync(source);

	if(!fs.existsSync(dest)){
		fs.mkdirSync(dest)
	}

  for (const content of contentOfDir) {
    const contentSource = path.join(source, content);
    const contentDestination = path.join(dest, content);
		
    if (fs.statSync(contentSource).isDirectory()) {
      console.log("Directory");
			cloneDir(contentSource, contentDestination)
    } else {
      console.log("File");
      const file = fs.readFileSync(contentSource);

      fs.writeFileSync(contentDestination, file.toString());
    }
  }
}
