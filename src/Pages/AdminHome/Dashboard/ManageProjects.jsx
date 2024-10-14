import { useForm } from 'react-hook-form';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const ManageProjects = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  // Props for Ant Design Dragger component (handling file upload)
  // const uploadProps = {
  //   name: 'file',
  //   multiple: true,
  //   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', // Replace with your backend
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   onDrop(e) {
  //     console.log('Dropped files', e.dataTransfer.files);
  //   },
  // };

  return (
    <div className="flex justify-center w-full py-28 items-center min-h-screen bg-gray-900 text-white">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-200">Add Project Images (minimum 5 images)</h2>

        {/* File Upload Section using Ant Design Dragger */}
        <div className="border-4 border-dashed border-gray-600 p-6 mb-8 rounded-lg">
          <Dragger  className="!border-none !bg-transparent">
            <div className="text-center">
              <InboxOutlined className="text-6xl text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-300">
                Click or drag files here to upload
              </p>
              <p className="text-sm text-gray-400">
                Support for single or bulk upload
              </p>
            </div>
          </Dragger>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              {...register('title', { required: true })}
              placeholder="Enter Project Title"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            {errors.title && <p className="text-red-500 text-sm">Title is required.</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Short Description</label>
            <input
              {...register('shortDescription', { required: true })}
              placeholder="Enter Short Description"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            {errors.shortDescription && <p className="text-red-500 text-sm">Description is required.</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block mb-1 font-medium">Technology Used</label>
            <input
              {...register('technology', { required: true })}
              placeholder="Enter Technologies (e.g. React, Node.js)"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            {errors.technology && <p className="text-red-500 text-sm">Technology is required.</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Frontend Repository</label>
            <input
              {...register('frontendRepo')}
              placeholder="Enter Frontend Repository URL"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Backend Repository</label>
            <input
              {...register('backendRepo')}
              placeholder="Enter Backend Repository URL"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Live Link</label>
            <input
              {...register('liveLink')}
              placeholder="Enter Live Project Link"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block mb-1 font-medium">Feature One</label>
            <input
              {...register('featureOne')}
              placeholder="Enter Feature One"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Feature Two</label>
            <input
              {...register('featureTwo')}
              placeholder="Enter Feature Two"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Feature Three</label>
            <input
              {...register('featureThree')}
              placeholder="Enter Feature Three"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Note (Optional)</label>
            <textarea
              {...register('note')}
              placeholder="Enter any additional notes"
              className="w-full p-3 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-white h-24 transition duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManageProjects;
