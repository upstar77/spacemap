import os, sys
import shutil

resource_folder = sys.argv[1]

root_src_dir = os.path.join('/Users/admin/projects/coworker/coworker/coworker/templates/pages_saved', resource_folder)
root_dst_dir = '/Users/admin/projects/coworker/coworker/coworker/static'

maps = {
    repr(["png", "jpeg", "jpg", "svg"]): "img",
    repr(["css"]): "css",
    repr(["js"]): "js",
}
# images = ["png", "jpeg", "jpg", "svg"]
# style = ["css"]
# js = ["js"]

for src_dir, dirs, files in os.walk(root_src_dir):
    dst_dir = src_dir.replace(root_src_dir, root_dst_dir, 1)
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)
    for file_ in files:

        for key, values in maps.items():
            if file_.endswith(tuple(key)):
                dst_file = os.path.join(dst_dir, values, file_)
                print("move", file_, "to",  dst_file)
                # src_file = os.path.join(src_dir, file_)

        # if os.path.exists(dst_file):
        #     os.remove(dst_file)
        # shutil.move(src_file, dst_dir)
