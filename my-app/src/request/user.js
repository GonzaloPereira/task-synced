// eslint-disable-next-line import/prefer-default-export
export async function deleteNotification(userId, notificationId) {
  return fetch(`/api/users/${userId}/notifications/${notificationId}`, {
    method: 'DELETE',
  });
}
